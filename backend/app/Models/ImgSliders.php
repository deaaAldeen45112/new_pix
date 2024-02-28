<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImgSliders extends Model
{
    public $timestamps = false;
    protected $table = 'images_sliders';
    protected $primaryKey = 'images_sliders_id';
    protected $fillable = [
        'images_sliders_id','img_path','img_type',
    ];


}
