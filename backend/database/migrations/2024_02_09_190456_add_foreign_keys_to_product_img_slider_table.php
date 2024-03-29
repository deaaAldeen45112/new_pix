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
        Schema::table('product_img_slider', function (Blueprint $table) {
            $table->foreign(['product_id'], 'product_id')->references(['product_id'])->on('product')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('product_img_slider', function (Blueprint $table) {
            $table->dropForeign('product_id');
        });
    }
};
