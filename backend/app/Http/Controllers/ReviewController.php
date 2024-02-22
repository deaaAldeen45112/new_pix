<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Repository\OptionProductPropertyRepository;
use App\Repository\ReviewRepository;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    private  readonly  ReviewRepository $_reviewRepository;
    public function __construct(ReviewRepository $reviewRepository)
    {
        $this->_reviewRepository=$reviewRepository;
    }
    public function getPaginatedReviewsByProductId(Request $perPage)
    {
        $pageSize = $perPage->query('pageSize');
        $productId = $perPage->query('productId');
        $reviews=$this->_reviewRepository->getPaginatedReviewsByProductId($productId,$pageSize);
        return
            response()->json([
                'data' => $reviews->items(),
                'currentPage' => $reviews->currentPage(),
                'totalPages' => $reviews->lastPage() ,
            ]);

    }
    public  function test(){

        return 3;
    }
    public function createReview(Request $request)
    {
        $createdReview=  $this->_reviewRepository->createReview($request);
        if ($createdReview) {
            return response()->json($createdReview, 201);
        } else {
            return response()->json(['error' => 'Review not Created'], 404);
        }
    }
    public function updateReview(Request $request)
    {
        $data = $request->all();
        $reviewId=$request->input('review_id');

        $updatedReview = $this->_reviewRepository->updateReview($reviewId, $data);

        if ($updatedReview) {
            return response()->json($updatedReview, 200);
        } else {
            return response()->json(['error' => 'Review not found'], 404);
        }
    }
    public function deleteReviewById($reviewId)
    {
        $isDeleted = $this->_reviewRepository->deleteReview($reviewId);

        if ($isDeleted) {
            return response()->json(['message' => 'Review deleted successfully'], 200);
        } else {
            return response()->json(['error' => 'Review not found'], 404);
        }
    }
}
