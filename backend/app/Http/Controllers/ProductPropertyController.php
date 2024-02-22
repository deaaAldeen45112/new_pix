<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\ProductProperty;
use App\Repository\ProductPropertyRepository;
use App\Repository\UserRepository;
use Illuminate\Http\Request;

class ProductPropertyController extends Controller
{
    private  readonly  ProductPropertyRepository $_productPropertyRepository;
    public function __construct(ProductPropertyRepository $productPropertyRepository)
    {
        $this->_productPropertyRepository=$productPropertyRepository;
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
    public function getProductPropertiesByProductId(Request $perPage)
    {
        $productId = $perPage->query('productId');
        return $this->_productPropertyRepository->getProductPropertiesByProductId($productId);
    }

    public  function getProductPropertyById($id)
    {
        $prop =ProductProperty::find($id);

        if ($prop) {
            return response()->json($prop, 200);
        } else {
            return response()->json(['error' => 'Prop not found'], 404);
        }

    }
    public function createProductProperty(Request $request)
    {
        $createdProductProperty=  $this->_productPropertyRepository->createProductProperty($request);
        if ($createdProductProperty) {
            return response()->json($createdProductProperty, 201);
        } else {
            return response()->json(['error' => 'User not Created'], 404);
        }
    }
    public function updateProductProperty(Request $request)
    {
        $data = $request->all();
        $productPropertyId=$request->input('product_property_id');

        $updatedProductProperty = $this->_productPropertyRepository->updateProductProperty($productPropertyId, $data);

        if ($updatedProductProperty) {
            return response()->json($updatedProductProperty, 200);
        } else {
            return response()->json(['error' => 'Product Property not found'], 404);
        }
    }
    public function deleteProductPropertyById($productProperty_Id)
    {
        $isDeleted = $this->_productPropertyRepository->deleteProductProperty($productProperty_Id);

        if ($isDeleted) {
            return response()->json(['message' => 'User deleted successfully'], 200);
        } else {
            return response()->json(['error' => 'User not found'], 404);
        }
    }
}
