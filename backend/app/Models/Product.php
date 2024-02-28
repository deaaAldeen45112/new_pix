<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'product';
    protected $primaryKey = 'product_id';
    protected $fillable = [
        'product_id','product_name','price','quantity','product_img','product_summery','product_desc','category_id'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class,'category_id');
    }

    public static function ConvertToFillable($data){
       return $product=[
           'product_id'=>$data->productId,
            'product_name'=>$data->productName
        ];


    }
    public static function ConvertToJson($data){
        $product=[
            'productId'=>$data->product_id,
            'product_name'=>$data->product_name
        ];


    }
}
