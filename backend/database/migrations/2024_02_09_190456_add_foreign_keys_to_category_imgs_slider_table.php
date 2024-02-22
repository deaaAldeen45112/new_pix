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
        Schema::table('category_imgs_slider', function (Blueprint $table) {
            $table->foreign(['category_imgs_slider_id'], 'category_id')->references(['category_id'])->on('category')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('category_imgs_slider', function (Blueprint $table) {
            $table->dropForeign('category_id');
        });
    }
};
