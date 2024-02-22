<?php

namespace App\Repository;
use App\Model\ApiResponse;
use App\Models\CategoryImgSlider;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Cateogry;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class CategoryRepository extends GenericRepository
{
    public function __construct(Category $category)
    {
        parent::__construct($category);
    }




    public  function  createCategory($request){

        $data = $request->all();

        $category = Category::create($data);
        return $category;

    }
    public function getPaginatedCateogriesWithCategory($perPage)
    {
        $products = DB::table('product')
            ->join('category', 'product.category_id', '=', 'category.category_id')
            ->select('product.*', 'category.name as category_name')
            ->paginate($perPage);

        return $products;
    }
    public function getPaginatedCategories($perPage)
    {
        return Category::paginate($perPage);
    }


    public function getCategoriesByParentId($productId)
    {

        return DB::table('category')->where('parent_id',"=",$productId)->get();
    }
    public function updateCategory($categoryId, array $data)
    {
        $category = Category::find($categoryId);

        if (!$category) {
            return null; // or throw an exception or handle the error as needed
        }

        $category->update($data);

        return $category;
    }
    public function deleteCategory($categoryId)
    {
        $category = Category::find($categoryId);


        if (!$category) {
            return false; // Or throw an exception or handle the error as needed
        }

          $effect= $category->delete();
          if($effect){
              if ($category->category_img) {
                  Storage::disk('public')->delete($category->category_img);
              }

              return true;
          }

        return false;
    }

    public function deleteCategoryImgSlider($categoryId)
    {
        $categoryImgSlider = CategoryImgSlider::find($categoryId);


        if (!$categoryImgSlider) {
            return false; // Or throw an exception or handle the error as needed
        }

        $effect= $categoryImgSlider->delete();
        if($effect){
            if ($categoryImgSlider->img_path) {
                Storage::disk('public')->delete($categoryImgSlider->img_path);
            }

            return true;
        }

        return false;
    }

    public  function  uploadCategoryImage(Request $data)
    {
          $uploadImage=parent::uploadImage($data);
          if($uploadImage->status==200)
          {
            $category= Category::find($data->input('id'));
            if($category){
                if ($category->category_img) {
                    Storage::disk('public')->delete($category->category_img);
                }
                $category->category_img=$uploadImage->data['imageUrl'];
                $category->save();
                $uploadImage->message.=" and upload in db";
                return $uploadImage;
            }
            if ($uploadImage->data['imageUrl']) {
                  Storage::disk('public')->delete($uploadImage->data['imageUrl']);
                  return ApiResponse::error('category not found',404);
              }
          }

          return $uploadImage;
    }

}
