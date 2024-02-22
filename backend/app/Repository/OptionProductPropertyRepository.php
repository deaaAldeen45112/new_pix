<?php

namespace App\Repository;

use App\Model\ApiResponse;
use App\Models\Category;
use App\Models\OptionProductProperty;
use App\Models\Product;
use App\Models\ProductProperty;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class OptionProductPropertyRepository extends GenericRepository
{
    public function __construct(OptionProductProperty $optionProductProperty)
    {
        parent::__construct($optionProductProperty);
    }
    public  function  createOptionProductProperty($request){

        $data = $request->all();
        $optionProductProperty = OptionProductProperty::create($data);
        return $optionProductProperty;

    }


    public function uploadOptionImage(Request $data)
    {
        $uploadImage = parent::uploadImage($data);
        if ($uploadImage->status == 200) {
            $option = OptionProductProperty::find($data->input('id'));
            if ($option) {
                if ($option->option_img) {
                    Storage::disk('public')->delete($option->option_img);
                }
                $option->option_img = $uploadImage->data['imageUrl'];
                $option->save();
                $uploadImage->message .= " and upload in db";
                return $uploadImage;
            }
            if ($uploadImage->data['imageUrl']) {
                Storage::disk('public')->delete($uploadImage->data['imageUrl']);
                return ApiResponse::error('option not found', 404);
            }
        }

        return $uploadImage;
    }


    public function getOptionProductPropertiesByProductPropertyId($productPropertyId)
    {
        $optionProductProperties = DB::table('option_product_property')
            ->where('product_property_id','=',$productPropertyId)
            ->get();

        return $optionProductProperties;
    }
    public function updateOptionProductProperty($optionProductPropertyId, array $data)
    {
        $optionProductProperty = OptionProductProperty::find($optionProductPropertyId);

        if (!$optionProductProperty) {
            return null; // or throw an exception or handle the error as needed
        }

        $optionProductProperty->update($data);

        return $optionProductProperty;
    }
    public function deleteOptionProductProperty($optionProductPropertyId)
    {
        $optionProductProperty = OptionProductProperty::find($optionProductPropertyId);

        if (!$optionProductProperty) {
            return false; // Or throw an exception or handle the error as needed
        }

        $optionProductProperty->delete();

        return true;
    }
}
