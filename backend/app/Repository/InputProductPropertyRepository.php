<?php

namespace App\Repository;

use App\Models\InputProductPropety;
use App\Models\OptionProductProperty;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class InputProductPropertyRepository
{
    public  function  createInputProductProperty($request){

        $data = $request->all();
        $inputProductProperty = InputProductPropety::create($data);
        return $inputProductProperty;

    }
    public function getInputProductPropertiesByProductPropertyId($productPropertyId)
    {
        $inputProductProperties = DB::table('input_product_property')
            ->where('property_id','=',$productPropertyId)
            ->first();

        return $inputProductProperties;
    }
    public function updateInputProductProperty($optionProductPropertyId, array $data)
    {
        $inputProductProperty = InputProductPropety::find($optionProductPropertyId);

        if (!$inputProductProperty) {
            return null; // or throw an exception or handle the error as needed
        }

        $inputProductProperty->update($data);

        return $inputProductProperty;
    }
    public function deleteInputProductProperty($inputProductPropertyId)
    {
        $inputProductProperty = InputProductPropety::find($inputProductPropertyId);

        if (!$inputProductProperty) {
            return false; // Or throw an exception or handle the error as needed
        }

        $inputProductProperty->delete();

        return true;
    }
}
