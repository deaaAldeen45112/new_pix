<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\DiscountWithQuatity;
use App\Repository\DiscountWithQuantityRepository;
use App\Repository\ProductPropertyRepository;
use Illuminate\Http\Request;

class DiscountWithQuantityController extends Controller
{
    private  readonly  DiscountWithQuantityRepository $_discountWithQuantityRepository;
    public function __construct(DiscountWithQuantityRepository $discountWithQuantityRepository)
    {
        $this->_discountWithQuantityRepository=$discountWithQuantityRepository;
    }

    public function getPaginatedProductProperties(Request $perPage)
    {
        $pageSize = $perPage->query('pageSize');
        return $this->_productPropertyRepository->getPaginatedProductProperties($pageSize);
    }
    public function getPaginatedProductPropertiesByProductId(Request $perPage)
    {
        $pageSize = $perPage->query('pageSize');
        $productId = $perPage->query('productId');
        return $this->_productPropertyRepository->getPaginatedProductPropertiesByProductId($productId,$pageSize);
    }

    public function getDiscountWithQuantityByProductId(Request $perPage)
    {
        $productId = $perPage->query('productId');
        return $this->_discountWithQuantityRepository->getDiscountWithQuantityByProductId($productId);
    }


    public function createDiscountWithQuantity(Request $request)
    {
        $createdDiscountWithQuantity=  $this->_discountWithQuantityRepository->createDiscountWithQuantity($request);
        if ($createdDiscountWithQuantity) {
            return response()->json($createdDiscountWithQuantity, 201);
        } else {
            return response()->json(['error' => 'User not Created'], 404);
        }
    }

    public function getDiscountWithQuantityById($id)
    {
        $dis = DiscountWithQuatity::find($id);

        if ($dis) {
            return response()->json($dis, 200);
        } else {
            return response()->json(['error' => '$dis not found'], 404);
        }
    }
    public function updateDiscountWithQuantity(Request $request)
    {
        $data = $request->all();
        $discountWithQuantityId=$request->input('discount_with_quantity_id');

        $updatedDiscountWithQuantity = $this->_discountWithQuantityRepository->updateDiscountWithQuantity($discountWithQuantityId, $data);

        if ($updatedDiscountWithQuantity) {
            return response()->json($updatedDiscountWithQuantity, 200);
        } else {
            return response()->json(['error' => 'Product Property not found'], 404);
        }
    }
    public function deleteDiscountWithQuantityById($discountWithQuantityId)
    {
        $isDeleted = $this->_discountWithQuantityRepository->deleteDiscountWithQuantity($discountWithQuantityId);

        if ($isDeleted) {
            return response()->json(['message' => 'User deleted successfully'], 200);
        } else {
            return response()->json(['error' => 'User not found'], 404);
        }
    }
}
