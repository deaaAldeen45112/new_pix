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
        Schema::create('product', function (Blueprint $table) {
            $table->integer('product_id', true);
            $table->string('product_name', 20)->nullable();
            $table->integer('price')->nullable();
            $table->integer('quantity')->nullable();
            $table->string('product_img', 100)->nullable();
            $table->string('product_summery', 1000)->nullable();
            $table->string('product_desc', 1000)->nullable();
            $table->integer('category_id')->nullable()->index('product_category_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product');
    }
};
