<?php

namespace App\Repository;

use App\Model\ApiResponse;
use App\Models\Category;
use App\Models\CategoryImgSlider;
use App\Models\Product;
use App\Models\ProductImgSlider;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ProductRepository extends GenericRepository
{
    public function __construct(Product $product)
    {
        parent::__construct($product);
    }

    public function createProduct($request): JsonResponse
    {

        $data = $request->all();
        $product = Product::create($data);
        return response()->json($product, 201);

    }


    public function getPaginatedProductsWithCategory($perPage)
    {
        $products = DB::table('product')
            ->join('category', 'product.category_id', '=', 'category.category_id')
            ->select('product.*', 'category.category_name as category_name')
            ->orderBy('product.product_id')
            ->paginate($perPage);

        return $products;
    }

    public function uploadProductImage(Request $data)
    {
        $uploadImage = parent::uploadImage($data);
        if ($uploadImage->status == 200) {
            $product = Product::find($data->input('id'));
            if ($product) {
                if ($product->product_img) {
                    Storage::disk('public')->delete($product->product_img);
                }
                $product->product_img = $uploadImage->data['imageUrl'];
                $product->save();
                $uploadImage->message .= " and upload in db";
                return $uploadImage;
            }
            if ($uploadImage->data['imageUrl']) {
                Storage::disk('public')->delete($uploadImage->data['imageUrl']);
                return ApiResponse::error('category not found', 404);
            }
        }

        return $uploadImage;
    }

    public function getPaginatedProducts($perPage)
    {
        return Product::paginate($perPage);
    }

    public function updateProduct($productId, array $data)
    {
        $product = Product::find($productId);

        if (!$product) {
            return null; // or throw an exception or handle the error as needed
        }

        $product->update($data);

        return $product;
    }

    public function deleteProduct($productId)
    {
        $product = Product::find($productId);

        if (!$product) {
            return false; // Or throw an exception or handle the error as needed
        }

        $effect = $product->delete();
        if ($effect) {
            if ($product->product_img) {
                Storage::disk('public')->delete($product->product_img);
            }
            return true;
        }
    }


    public function deleteProductImgSlider($id)
    {
        $productImgSlider = ProductImgSlider::find($id);


        if (!$productImgSlider) {
            return false; // Or throw an exception or handle the error as needed
        }

        $effect= $productImgSlider->delete();
        if($effect){
            if ($productImgSlider->img_path) {
                Storage::disk('public')->delete($productImgSlider->img_path);
            }

            return true;
        }

        return false;
    }

}
