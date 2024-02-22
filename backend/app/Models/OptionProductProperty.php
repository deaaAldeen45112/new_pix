<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OptionProductProperty extends Model
{
    public $timestamps = false;
    protected $table = 'option_product_property';
    protected $primaryKey='option_product_property_id';
    protected $fillable = [
        'option_product_property_id','product_property_id','option_name', 'option_img', 'option_price', 'option_default'
    ];
}
