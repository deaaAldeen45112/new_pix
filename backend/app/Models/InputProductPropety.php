<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InputProductPropety extends Model
{
    public $timestamps = false;
    protected $table = 'input_product_property';
    protected $primaryKey='input_product_property_id';
    protected $fillable = [
        'input_product_property_id',
        'property_id',
        'price',
        'for_num'


    ];
}
