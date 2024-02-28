<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Model\ApiResponse;
use App\Models\Category;
use App\Models\CategoryImgSlider;
use App\Models\ImgSliders;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Mockery\Exception;

class HomeController extends Controller
{
    public  function uploadImagesSlider(Request $req)
    {


        foreach ($req->file('images') as $index => $image) {
            $image = $this->uploadImages(['image' => $image]);

            if ($image->status == 200) {


                $ImgSlider = new ImgSliders();
                $ImgSlider->img_type = $req->input('type');
                $ImgSlider->img_path = $image->data['imageUrl'];

                $ImgSlider->save();


            }


        }
        return response()->json(ApiResponse::success('images has added ', 'Image has been added'));
    }

    public  function  deleteImgSliders($categoryImgSliderId){

        $isDeleted = $this->deleteImgSlider($categoryImgSliderId);

        if ($isDeleted) {
            return response()->json(['message' => 'Img Slider deleted successfully'], 200);
        } else {
            return response()->json(['error' => 'Id not found'], 404);
        }


    }


    public function getImgsSlidersByType($type)
    {

        $imgsSliders = DB::table('images_sliders')
            ->where('img_type','=',$type)->get();

        return $imgsSliders;
    }
    private function deleteImgSlider($categoryId)
    {
        $categoryImgSlider = ImgSliders::find($categoryId);


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

    private function uploadImages($data):ApiResponse
    {


        $validator = Validator::make($data, [
                'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:20048',
                // Other validation rules...
            ]
            ,
            [
                'image.required' => 'The image field is required.',
                'image.image' => 'The file must be an image.',
                'image.mimes' => 'The image must be a file of type: jpeg, png, jpg, gif.',
                'image.max' => 'The image must not be larger than 20048 kilobytes.',
            ]
        );

        if ($validator->fails()) {
            return ApiResponse::error('Validation failed', 422, $validator->errors());
        }

        try {
            $imagePath = $data['image']->store('images', 'public');
            return ApiResponse::success(['imageUrl' => $imagePath],'Image has been added');
        }
        catch (Exception $exception){
            \Log::error('upload Image: ' . $exception->getMessage());
            return ApiResponse::error('Storing failed',422);
        }

    }


}
