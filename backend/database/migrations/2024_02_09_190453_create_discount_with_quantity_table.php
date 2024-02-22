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
        Schema::create('discount_with_quantity', function (Blueprint $table) {
            $table->integer('discount_with_quantity_id');
            $table->integer('product_id')->index('discount_with_quantity_product_id');
            $table->integer('quantity');
            $table->integer('discount_rate');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('discount_with_quantity');
    }
};
