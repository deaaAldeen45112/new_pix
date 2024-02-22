<?php

namespace App\Repository;

use App\Models\User;

class RoleRepository
{
     public  function  createUesr($request):bool{

         $data=new User();
         $data->user_name="asd";

         $data->save();

         return  true;

     }
}
