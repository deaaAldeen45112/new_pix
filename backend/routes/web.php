<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Admin Routes
Route::prefix('admin')->group(function () {
    Route::get('/', 'AdminController@index');
    Route::get('/products', 'AdminController@products');
    Route::get('/orders', 'AdminController@orders');
    // Add more routes for categories, users, etc.
});

// User Routes
Route::prefix('user')->group(function () {
    Route::get('/createUser', 'UserController@createUser');
    Route::get('/orders', 'UserController@orders');
    // Add more routes for user-specific functionalities.
});

// Web Routes
Route::prefix('web')->group(function () {
    Route::get('deaa',[UserController::class, 'createUser']);

    //Route::get('/', 'AdminController@index');
    //Route::get('/products', 'AdminController@products');
    //Route::get('/orders', 'AdminController@orders');
    // Add more routes for categories, users, etc.
});
