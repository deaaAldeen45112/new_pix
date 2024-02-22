<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Repository\CategoryRepository;
use App\Repository\UserRepository;
use Illuminate\Http\Request;

class UserController extends Controller
{
    private  readonly  UserRepository $_userRepository;
    public function __construct(UserRepository $userRepository)
    {
        $this->_userRepository=$userRepository;
    }

    public function getPaginatedUsers(Request $perPage)
    {
        $pageSize = $perPage->query('pageSize');
        return $this->_userRepository->getPaginatedUsers($pageSize);
    }
    public function getPaginatedUsersWithRoleName(Request $perPage)
    {
        $pageSize = $perPage->query('pageSize');
        $users= $this->_userRepository->getPaginatedUsersWithRoleName($pageSize);
            return
        response()->json([
            'data' => $users->items(),
            'currentPage' => $users->currentPage(),
            'totalPages' => $users->lastPage() ,
        ]);


    }
    public function createUser(Request $request)
    {
        $createdUser=  $this->_userRepository->createUser($request);
        if ($createdUser) {
            return response()->json($createdUser, 201);
        } else {
            return response()->json(['error' => 'User not Created'], 404);
        }
    }
    public function updateUser(Request $request)
    {
        $data = $request->all();
        $userId=$request->input('user_id');
        $updatedUser = $this->_userRepository->updateUser($userId, $data);

        if ($updatedUser) {
            return response()->json($updatedUser, 200);
        } else {
            return response()->json(['error' => 'User not found'], 404);
        }
    }
    public function deleteUserById($userId)
    {
        $isDeleted = $this->_userRepository->deleteUser($userId);

        if ($isDeleted) {
            return response()->json(['message' => 'User deleted successfully'], 200);
        } else {
            return response()->json(['error' => 'User not found'], 404);
        }
    }
}
