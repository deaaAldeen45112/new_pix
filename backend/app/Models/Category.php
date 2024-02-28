<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public $timestamps = false;
    protected $table = 'category';
    protected $primaryKey = 'category_id';
    protected $fillable = [
        'category_id','category_name','category_desc', 'parent_id', 'category_img',
    ];

    public function products()
    {
        return $this->hasMany(Product::class,'category_id');
    }
    // Define the relationship with subcategories
    public function subcategories()
    {
        return $this->hasMany(Category::class, 'parent_id', 'category_id');
    }
}
