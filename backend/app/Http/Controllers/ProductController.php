<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Model\ApiResponse;
use App\Models\CategoryImgSlider;
use App\Models\ProductImgSlider;
use App\Repository\ProductRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
   private  readonly  ProductRepository $_productRepository;
public function __construct(ProductRepository $productRepository)
{
    $this->_productRepository=$productRepository;
}
    public function uploadImage(Request $request)
    {

        try{
            return response()->json($this->_productRepository->uploadProductImage($request));
        }
        catch (\Exception $exception){

            \Log::error('upload Image: ' . $exception->getMessage());
            return  response()->json(ApiResponse::error('error from server, we are working on it',500));
        }

    }
    public function getPaginatedProducts(Request $perPage)
    {
        $pageSize = $perPage->query('pageSize');
        return $this->_productRepository->getPaginatedProducts($pageSize);
    }
    public function getPaginatedProductsWithCategory(Request $perPage)
    {

        $pageSize = $perPage->query('pageSize');
        $products= $this->_productRepository->getPaginatedProductsWithCategory($pageSize);
        return
               response()->json([
                  'data' => $products->items(),
                  'currentPage' => $products->currentPage(),
                  'totalPages' => $products->lastPage() ,
              ]);


    }
    public function getProductById($id)
    {
        $product = $this->_productRepository->find($id);

        if ($product) {
            return response()->json($product, 200);
        } else {
            return response()->json(['error' => 'Product not found'], 404);
        }
    }

    public function getProductWithParentIdById($id)
    {

        $product=   DB::table('product')
            ->join('category', 'product.category_id', '=', 'category.category_id')
            ->select('product.*', 'category.parent_id as parent_id')
            ->where('product.product_id','=',$id)
            ->first();


        if ($product) {
            return response()->json($product, 200);
        } else {
            return response()->json(['error' => 'Product not found'], 404);
        }
    }
    public function createProduct(Request $product)
    {
        return $this->_productRepository->createProduct($product);
    }
    public function updateProduct(Request $request)
    {
        $data = $request->all();
        $productId=$request->input('product_id');
        $updatedProduct = $this->_productRepository->updateProduct($productId, $data);

        if ($updatedProduct) {
            return response()->json($updatedProduct, 200);
        } else {
            return response()->json(['error' => 'Product not found'], 404);
        }
    }
    public function deleteProductById($productId)
    {
        $isDeleted = $this->_productRepository->deleteProduct($productId);

        if ($isDeleted) {
            return response()->json(['message' => 'Product deleted successfully'], 200);
        } else {
            return response()->json(['error' => 'Product not found'], 404);
        }
    }


    public  function uploadImagesSlider(Request $req)
    {

        $product = $this->_productRepository->find($req->input('id'));
        if (!$product)
            return response()->json(ApiResponse::error('Id not fount', 404));

        foreach ($req->file('images') as $index => $image) {
            $image = $this->_productRepository->uploadImages(['image' => $image]);

            if ($image->status == 200) {


                $productImgSlider = new ProductImgSlider();
                $productImgSlider->product_id = $req->input('id');
                $productImgSlider->img_path = $image->data['imageUrl'];

                $productImgSlider->save();


            }


        }
        return response()->json(ApiResponse::success('images has added ', 'Image has been added'));
    }

    public  function  deleteProductImgSlider($id){

        $isDeleted = $this->_productRepository->deleteProductImgSlider($id);

        if ($isDeleted) {
            return response()->json(['message' => 'CategoryImgSlider deleted successfully'], 200);
        } else {
            return response()->json(['error' => 'Id not found'], 404);
        }


    }


    public function getProductImgsSliderByProductId($id)
    {

        $categoryImgsSlider = DB::table('product_img_slider')
            ->where('product_id','=',$id)->get();

        return $categoryImgsSlider;
    }


}
