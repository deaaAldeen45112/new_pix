<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Model\ApiResponse;
use App\Models\OptionProductProperty;
use App\Repository\OptionProductPropertyRepository;
use App\Repository\ProductPropertyRepository;
use Illuminate\Http\Request;

class OptionProductPropertyController extends Controller
{
    private  readonly  OptionProductPropertyRepository $_optionProductPropertyRepository;
    public function __construct(OptionProductPropertyRepository $optionProductPropertyRepository)
    {
        $this->_optionProductPropertyRepository=$optionProductPropertyRepository;
    }
    public function getProductPropertiesByProductId(Request $perPage)
    {
        $productId = $perPage->query('productId');
        return $this->_productPropertyRepository->getProductPropertiesByProductId($productId);
    }
//    public function getOptionProductPropertiesByProductPropertyId(Request $perPage)
//    {
//        $pageSize = $perPage->query('pageSize');
//        $productPropertyId = $perPage->query('productPropertyId');
//        return $this->_optionProductPropertyRepository->getOptionProductPropertiesByProductPropertyId($productPropertyId,$pageSize);
//    }

    public function getOptionProductPropertiesByProductPropertyId(Request $perPage)
    {

        $productPropertyId = $perPage->query('productPropertyId');
        return $this->_optionProductPropertyRepository->getOptionProductPropertiesByProductPropertyId($productPropertyId);
    }
    public function getOptionProductPropertyById($id)
    {
        $option = OptionProductProperty::find($id);

        if ($option) {
            return response()->json($option, 200);
        } else {
            return response()->json(['error' => 'Option not found'], 404);
        }
    }
    public function uploadImage(Request $request)
    {

        try{
            return response()->json($this->_optionProductPropertyRepository->uploadOptionImage($request));
        }
        catch (\Exception $exception){

            \Log::error('upload Image: ' . $exception->getMessage());
            return  response()->json(ApiResponse::error('error from server, we are working on it',500));
        }

    }
    public function createOptionProductProperty(Request $request)
    {
        $createdOptionProductProperty=  $this->_optionProductPropertyRepository->createOptionProductProperty($request);
        if ($createdOptionProductProperty) {
            return response()->json($createdOptionProductProperty, 201);
        } else {
            return response()->json(['error' => 'User not Created'], 404);
        }
    }
    public function updateOptionProductProperty(Request $request)
    {
        $data = $request->all();
        $optionProductPropertyId=$request->input('option_product_property_id');

        $updatedOptionProductProperty = $this->_optionProductPropertyRepository->updateOptionProductProperty($optionProductPropertyId, $data);

        if ($updatedOptionProductProperty) {
            return response()->json($updatedOptionProductProperty, 200);
        } else {
            return response()->json(['error' => 'Product Property not found'], 404);
        }
    }
    public function deleteOptionProductPropertyById($optionProductPropertyId)
    {
        $isDeleted = $this->_optionProductPropertyRepository->deleteOptionProductProperty($optionProductPropertyId);

        if ($isDeleted) {
            return response()->json(['message' => 'User deleted successfully'], 200);
        } else {
            return response()->json(['error' => 'User not found'], 404);
        }
    }
}
