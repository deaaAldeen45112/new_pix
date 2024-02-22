<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    public $timestamps = false;
    protected $table = 'user';
    protected $primaryKey = 'user_id';
    protected $fillable = [
        'user_id','user_name','country', 'email', 'phone', 'role_id', 'password',
    ];
}
