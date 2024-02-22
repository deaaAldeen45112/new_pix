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
        Schema::table('discount_with_quantity', function (Blueprint $table) {
            $table->foreign(['product_id'], 'discount_with_quantity_product_id')->references(['product_id'])->on('product')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('discount_with_quantity', function (Blueprint $table) {
            $table->dropForeign('discount_with_quantity_product_id');
        });
    }
};
