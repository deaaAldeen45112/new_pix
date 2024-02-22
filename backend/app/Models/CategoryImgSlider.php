<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryImgSlider extends Model
{
    public $timestamps = false;
    protected $table = 'category_imgs_slider';
    protected $primaryKey='category_imgs_slider_id';
    protected $fillable = [
        'category_imgs_slider_id','img_path','category_id'
    ];
}
