<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    public $timestamps = false;
    protected $table = 'reviews';
    protected $primaryKey="review_id";
    protected $fillable = [
        'review_id','user_id','product_id', 'review_desc', 'review_star',
    ];
}
