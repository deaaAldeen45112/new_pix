<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\ProductController;
use \App\Http\Controllers\CategoryController;
use \App\Http\Controllers\UserController;
use \App\Http\Controllers\ProductPropertyController;
use \App\Http\Controllers\OptionProductPropertyController;
use \App\Http\Controllers\InputProductPropertyController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(ProductController::class)
    ->prefix('product')
    ->group(function () {
        Route::get('/getProductWithParentIdById/{id}', 'getProductWithParentIdById');
        Route::get('/getProductById/{id}', 'getProductById');
        Route::get('/getPaginatedProducts', 'getPaginatedProducts');
        Route::get('/getPaginatedProductsWithCategory', 'getPaginatedProductsWithCategory');
        Route::post('/createProduct','createProduct');
        Route::post('/uploadImage','uploadImage');
        Route::put('/updateProduct','updateProduct');

        Route::post('/uploadImagesSlider','uploadImagesSlider');
        Route::delete('/deleteProductImgSlider/{product_id}','deleteProductImgSlider');
        Route::get('/getProductImgsSliderByProductId/{id}', 'getProductImgsSliderByProductId');
        Route::delete('/deleteProductById/{product_id}','deleteProductById');
});
Route::controller(CategoryController::class)
    ->prefix('category')
    ->group(function () {
        Route::get('/getCategoriesByParentId','getCategoriesByParentId');
        Route::get('/getPaginatedCategories', 'getPaginatedCategories');
        Route::get('/getPaginatedProductsWithCategory', 'getPaginatedProductsWithCategory');
        Route::get('/getCategoryById/{id}', 'getCategoryById');
        Route::get('/getCategoryImgsSliderByCategoryId/{categoryId}', 'getCategoryImgsSliderByCategoryId');
        Route::post('/createCategory','createCategory');
        Route::post('/uploadImage','uploadImage');
        Route::post('/uploadImagesSlider','uploadImagesSlider');
        Route::put('/updateCategory','updateCategory');
        Route::delete('/deleteCategoryById/{id}','deleteCategoryById');
        Route::delete('/deleteCategoryImgSlider/{id}','deleteCategoryImgSlider');
    });
Route::controller(UserController::class)
    ->prefix('user')
    ->group(function () {
        Route::get('/getPaginatedUsers', 'getPaginatedUsers');
        Route::get('/getPaginatedUsersWithRoleName', 'getPaginatedUsersWithRoleName');
        Route::post('/createUser','createUser');
        Route::put('/updateUser','updateUser');
        Route::delete('/deleteUserById/{user_id}','deleteUserById');
    });
Route::controller(ProductPropertyController::class)
    ->prefix('productProperty')
    ->group(function () {
        Route::get('/getPaginatedProductProperties', 'getPaginatedProductProperties');
        Route::get('/getPaginatedProductPropertiesByProductId', 'getPaginatedProductPropertiesByProductId');
        Route::get('/getProductPropertiesByProductId', 'getProductPropertiesByProductId');
        Route::get('/getProductPropertyById/{id}', 'getProductPropertyById');
        Route::post('/createProductProperty','createProductProperty');
        Route::put('/updateProductProperty','updateProductProperty');
        Route::delete('/deleteProductPropertyById/{product_property_id}','deleteProductPropertyById');
    });
Route::controller(OptionProductPropertyController::class)
    ->prefix('optionProductProperty')
    ->group(function () {
        Route::get('/getOptionProductPropertyById/{id}','getOptionProductPropertyById');
        Route::post('/uploadImage','uploadImage');
        Route::get('/getOptionProductPropertiesByProductPropertyId', 'getOptionProductPropertiesByProductPropertyId');
        Route::post('/createOptionProductProperty','createOptionProductProperty');
        Route::put('/updateOptionProductProperty','updateOptionProductProperty');
        Route::delete('/deleteOptionProductPropertyById/{optionProductPropertyId}','deleteOptionProductPropertyById');
    });
Route::controller(InputProductPropertyController::class)
    ->prefix('inputProductProperty')
    ->group(function () {
        Route::get('/getInputProductPropertyById/{id}', 'getInputProductPropertyById');

        Route::get('/getInputProductPropertiesByProductPropertyId', 'getInputProductPropertiesByProductPropertyId');
        Route::post('/createInputProductProperty','createInputProductProperty');
        Route::put('/updateInputProductProperty','updateInputProductProperty');
        Route::delete('/deleteInputProductPropertyById/{inputProductPropertyId}','deleteInputProductPropertyById');
    });

Route::controller(\App\Http\Controllers\ReviewController::class)
    ->prefix('review')
    ->group(function () {
        Route::get('/test','test');
        Route::get('/getPaginatedReviewsByProductId', 'getPaginatedReviewsByProductId');
        Route::post('/createReview','createReview');
        Route::put('/updateReview','updateReview');
        Route::delete('/deleteReviewById/{reviewId}','deleteReviewById');
    });
Route::controller(\App\Http\Controllers\DiscountWithQuantityController::class)
    ->prefix('discountWithQuantity')
    ->group(function () {
        Route::get('/getDiscountWithQuantityById/{id}','getDiscountWithQuantityById');
        Route::get('/getDiscountWithQuantityByProductId', 'getDiscountWithQuantityByProductId');
        Route::post('/createDiscountWithQuantity','createDiscountWithQuantity');
        Route::put('/updateDiscountWithQuantity','updateDiscountWithQuantity');
        Route::delete('/deleteDiscountWithQuantityById/{id}','deleteDiscountWithQuantityById');
    });
