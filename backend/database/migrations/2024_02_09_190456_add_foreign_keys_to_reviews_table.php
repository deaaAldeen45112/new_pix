<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('reviews', function (Blueprint $table) {
            $table->foreign(['user_id'], 'review_user_id')->references(['user_id'])->on('user')->onDelete('CASCADE');
            $table->foreign(['product_id'], 'review_product_id')->references(['product_id'])->on('product')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('reviews', function (Blueprint $table) {
            $table->dropForeign('review_user_id');
            $table->dropForeign('review_product_id');
        });
    }
};
