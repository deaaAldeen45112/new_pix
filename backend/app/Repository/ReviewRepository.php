<?php

namespace App\Repository;

use App\Models\ProductProperty;
use App\Models\Review;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class ReviewRepository
{
    public  function  createReview($request){

        $data = $request->all();
        $review = Review::create($data);
        return $review;

    }

    public function getPaginatedReviewsByProductId($productId,$perPage)
    {
        $reviews =  $productProperties = DB::table('reviews')
            ->where('product_id','=',$productId)
            ->orderBy('reviews.review_id')
            ->paginate($perPage);

        return $reviews;
    }

    public function updateReview($reviewId, array $data)
    {
        $review = Review::find($reviewId);

        if (!$review) {
            return null; // or throw an exception or handle the error as needed
        }

        $review->update($data);

        return $review;
    }
    public function deleteReview($reviewId)
    {
        $review = Review::find($reviewId);

        if (!$review) {
            return false; // Or throw an exception or handle the error as needed
        }

        $review->delete();

        return true;
    }
}
