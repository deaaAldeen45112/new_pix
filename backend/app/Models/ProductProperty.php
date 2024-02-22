<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductProperty extends Model
{
    public $timestamps = false;
    protected $table = 'product_property';
    protected $primaryKey='product_property_id';
    protected $fillable = [
        'product_property_id','product_property_name','product_property_desc', 'type_id','img_name','product_id'
    ];
}
