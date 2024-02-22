<?php

namespace App\Repository;

use App\Model\ApiResponse;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Mockery\Exception;
use function Laravel\Prompts\error;

class GenericRepository
{
    protected $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    public function all()
    {
        return $this->model->all();
    }

    public function find($id)
    {
        return $this->model->find($id);
    }

    public function create(array $data)
    {
        return $this->model->create($data);
    }

    public function update($id, array $data)
    {
        $model = $this->find($id);
        $model->update($data);

        return $model;
    }

    public function delete($id)
    {
        $model = $this->find($id);
        $model->delete();

        return $model;
    }


    public function uploadImage($data):ApiResponse
    {


        $validator = Validator::make($data->all(), [
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


        $imagePath = $data->file('image')->store('images', 'public');
        return ApiResponse::success(['imageUrl' => $imagePath],'Image has been added');
    }

    public function uploadImages($data):ApiResponse
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
