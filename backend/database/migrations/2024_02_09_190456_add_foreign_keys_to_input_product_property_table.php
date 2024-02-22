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
        Schema::table('input_product_property', function (Blueprint $table) {
            $table->foreign(['property_id'], 'input_product_property_property_id')->references(['product_property_id'])->on('product_property')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('input_product_property', function (Blueprint $table) {
            $table->dropForeign('input_product_property_property_id');
        });
    }
};
