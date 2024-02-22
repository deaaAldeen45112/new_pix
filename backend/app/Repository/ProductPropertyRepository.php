<?php

namespace App\Repository;

use App\Models\ProductProperty;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class ProductPropertyRepository
{

    public  function  createProductProperty($request){

        $data = $request->all();
        $productProperty = ProductProperty::create($data);
        return $productProperty;

    }
    public function getPaginatedProductPropertiesByProductId($productId,$perPage)
    {
        $productProperties = DB::table('product_property')
            ->where('product_id','=',$productId)
            ->paginate($perPage);

        return $productProperties;
    }
    public function getProductPropertiesByProductId($productId)
    {
        $productProperties =  $productProperties = DB::table('product_property')
            ->where('product_id','=',$productId)
            ->get();

        return $productProperties;
    }
    public function getPaginatedProductProperties($perPage)
    {
        return ProductProperty::paginate($perPage);
    }
    public function updateProductProperty($productPropertyId, array $data)
    {
        $productProperty = ProductProperty::find($productPropertyId);

        if (!$productProperty) {
            return null; // or throw an exception or handle the error as needed
        }

        $productProperty->update($data);

        return $productProperty;
    }
    public function deleteProductProperty($productPropertyId)
    {
        $productProperty = ProductProperty::find($productPropertyId);

        if (!$productProperty) {
            return false; // Or throw an exception or handle the error as needed
        }

        $productProperty->delete();

        return true;
    }
}
