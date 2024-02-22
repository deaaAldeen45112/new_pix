<?php

namespace App\Repository;

use App\Models\DiscountWithQuatity;
use App\Models\ProductProperty;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class DiscountWithQuantityRepository
{
    public  function  createDiscountWithQuantity($request){

        $data = $request->all();
        $discount = DiscountWithQuatity::create($data);
        return $discount;

    }
    public function getPaginatedProductPropertiesByProductId($productId,$perPage)
    {
        $productProperties = DB::table('product_property')
            ->where('product_id','=',$productId)
            ->paginate($perPage);

        return $productProperties;
    }
    public function getDiscountWithQuantityByProductId($productId)
    {
         $discounts = DB::table('discount_with_quantity')
            ->where('product_id','=',$productId)
            ->get();

        return $discounts;
    }
    public function getPaginatedProductProperties($perPage)
    {
        return ProductProperty::paginate($perPage);
    }
    public function updateDiscountWithQuantity($discountId, array $data)
    {
        $dis = DiscountWithQuatity::find($discountId);

        if (!$dis) {
            return null; // or throw an exception or handle the error as needed
        }

        $dis->update($data);

        return $dis;
    }
    public function deleteDiscountWithQuantity($disId)
    {
        $dis = DiscountWithQuatity::find($disId);

        if (!$dis) {
            return false; // Or throw an exception or handle the error as needed
        }

        $dis->delete();

        return true;
    }
}
