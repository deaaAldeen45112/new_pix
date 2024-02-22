<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\InputProductPropety;
use App\Repository\InputProductPropertyRepository;

use Illuminate\Http\Request;

class InputProductPropertyController extends Controller
{
    private  readonly  InputProductPropertyRepository $_inputProductPropertyRepository;
    public function __construct(InputProductPropertyRepository $inputProductPropertyRepository)
    {
        $this->_inputProductPropertyRepository=$inputProductPropertyRepository;
    }

    public function getInputProductPropertiesByProductPropertyId(Request $perPage)
    {

        $productPropertyId = $perPage->query('productPropertyId');
        return $this->_inputProductPropertyRepository->getInputProductPropertiesByProductPropertyId($productPropertyId);
    }
    public function createInputProductProperty(Request $request)
    {
        $createdInputProductProperty=  $this->_inputProductPropertyRepository->createInputProductProperty($request);
        if ($createdInputProductProperty) {
            return response()->json($createdInputProductProperty, 201);
        } else {
            return response()->json(['error' => 'User not Created'], 404);
        }
    }

    public function createOrUpdateInputProductProperty(Request $request){


        $inputProductProperty = InputProductPropety::find($request->get('input_product_property_id'));

        if($inputProductProperty!=null){
            $updatedInputProductProperty= $inputProductProperty->update($request->all());
            return response()->json($updatedInputProductProperty, 200);
        }
        else {

            $createdInputProductProperty= InputProductPropety::create($request->all());
            return response()->json($createdInputProductProperty, 201);
        }


    }

    public function updateInputProductProperty(Request $request)
    {
        $data = $request->all();
        $inputProductPropertyId=$request->input('input_product_property_id');

        $updatedInputProductProperty = $this->_inputProductPropertyRepository->updateInputProductProperty($inputProductPropertyId, $data);

        if ($updatedInputProductProperty) {
            return response()->json($updatedInputProductProperty, 200);
        } else {
            return response()->json(['error' => 'Product Property not found'], 404);
        }
    }

    public function getInputProductPropertyById($id)
    {
        $inputProductProperty = InputProductPropety::find($id);

        if ($inputProductProperty) {
            return response()->json($inputProductProperty, 200);
        } else {
            return response()->json(['error' => 'Input Product Property not found'], 404);
        }
    }
    public function deleteInputProductPropertyById($inputProductPropertyId)
    {
        $isDeleted = $this->_inputProductPropertyRepository->deleteInputProductProperty($inputProductPropertyId);

        if ($isDeleted) {
            return response()->json(['message' => 'User deleted successfully'], 200);
        } else {
            return response()->json(['error' => 'User not found'], 404);
        }
    }
}
