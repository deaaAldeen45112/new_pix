<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DiscountWithQuatity extends Model
{
    public $timestamps = false;
    protected $table = 'discount_with_quantity';
    protected $primaryKey="discount_with_quantity_id";

    protected $fillable = [
        'discount_with_quantity_id','product_id','quantity','discount_rate',
    ];
}
