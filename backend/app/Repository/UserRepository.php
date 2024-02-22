<?php

namespace App\Repository;

use App\Models\Category;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class UserRepository
{
    public  function  createUser($request){

        $data = $request->all();
        $user = User::create($data);
        return $user;

    }
    public function getPaginatedUsersWithRoleName($perPage)
    {
        $users = DB::table('user')
            ->join('role', 'user.role_id', '=', 'role.role_id')
            ->select('user.*', 'role.role_name as role_name')
            ->paginate($perPage);

        return $users;
    }
    public function getPaginatedUsers($perPage)
    {
        return User::paginate($perPage);
    }
    public function updateUser($userId, array $data)
    {
        $user = User::find($userId);

        if (!$user) {
            return null; // or throw an exception or handle the error as needed
        }

        $user->update($data);

        return $user;
    }
    public function deleteUser($userId)
    {
        $user = User::find($userId);

        if (!$user) {
            return false; // Or throw an exception or handle the error as needed
        }

        $user->delete();

        return true;
    }
}
