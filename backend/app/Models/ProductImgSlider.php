<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductImgSlider extends Model
{
    protected $primaryKey='product_img_slider_id';
    public $timestamps = false;
    protected $table = 'product_img_slider';

    protected $fillable = [
        'product_img_slider_id','img_path','product_id'
    ];
}
