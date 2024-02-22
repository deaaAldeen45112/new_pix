<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Model\ApiResponse;
use App\Models\CategoryImgSlider;
use App\Repository\CategoryRepository;
use App\Repository\ProductRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\Console\Input\Input;
use function Webmozart\Assert\Tests\StaticAnalysis\length;

class CategoryController extends Controller
{
    private  readonly  CategoryRepository $_categoryRepository;
    public function __construct(CategoryRepository $categoryRepository)
    {
        $this->_categoryRepository=$categoryRepository;
    }

    public function getPaginatedCategories(Request $perPage)
    {
        $pageSize = $perPage->query('pageSize');
        return $this->_categoryRepository->getPaginatedCategories($pageSize);
    }
    public function getCategoriesByParentId(Request $perPage)
    {
        $parentId= $perPage->query('id');
        return $this->_categoryRepository->getCategoriesByParentId($parentId);
    }

    public function uploadImage(Request $request)
    {

        try{
            return response()->json($this->_categoryRepository->uploadCategoryImage($request));
        }
       catch (\Exception $exception){

           \Log::error('upload Image: ' . $exception->getMessage());
            return  response()->json(ApiResponse::error('error from server, we are working on it',500));
       }

    }

    public function createCategory(Request $request)
    {

        $createdCategory=  $this->_categoryRepository->createCategory($request);
        if ($createdCategory) {
            return response()->json($createdCategory, 201);
        } else {
            return response()->json(['error' => 'Category not Created'], 404);
        }
    }
    public function updateCategory(Request $request)
    {
        $data = $request->all();
        $categoryId=$request->input('category_id');
        $updatedCategory = $this->_categoryRepository->updateCategory($categoryId, $data);

        if ($updatedCategory) {
            return response()->json($updatedCategory, 200);
        } else {
            return response()->json(['error' => 'Product not found'], 404);
        }
    }
    public function deleteCategoryById($categoryId)
    {
        $isDeleted = $this->_categoryRepository->deleteCategory($categoryId);

        if ($isDeleted) {
            return response()->json(['message' => 'Product deleted successfully'], 200);
        } else {
            return response()->json(['error' => 'Product not found'], 404);
        }
    }

    public function getCategoryById($categoryId)
    {
        $category = $this->_categoryRepository->find($categoryId);

        if ($category) {
            return response()->json($category, 200);
        } else {
            return response()->json(['error' => 'Category not found'], 404);
        }
    }



    public  function uploadImagesSlider(Request $req)
    {

        $category = $this->_categoryRepository->find($req->input('id'));
        if (!$category)
            return response()->json(ApiResponse::error('Id not fount', 404));
        foreach ($req->file('images') as $index => $image) {
            $image = $this->_categoryRepository->uploadImages(['image' => $image]);

            if ($image->status == 200) {


                $categoryImgSlider = new CategoryImgSlider();
                $categoryImgSlider->category_id = $req->input('id');
                $categoryImgSlider->img_path = $image->data['imageUrl'];

                $categoryImgSlider->save();


            }


        }
        return response()->json(ApiResponse::success('images has added ', 'Image has been added'));
    }

    public  function  deleteCategoryImgSlider($categoryImgSliderId){

        $isDeleted = $this->_categoryRepository->deleteCategoryImgSlider($categoryImgSliderId);

        if ($isDeleted) {
            return response()->json(['message' => 'CategoryImgSlider deleted successfully'], 200);
        } else {
            return response()->json(['error' => 'Id not found'], 404);
        }


    }


    public function getCategoryImgsSliderByCategoryId($categoryId)
    {

         $categoryImgsSlider = DB::table('category_imgs_slider')
            ->where('category_id','=',$categoryId)->get();

        return $categoryImgsSlider;
    }


}
