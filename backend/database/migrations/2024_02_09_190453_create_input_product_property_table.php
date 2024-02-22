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
        Schema::create('input_product_property', function (Blueprint $table) {
            $table->integer('input_product_property_id', true);
            $table->integer('property_id')->index('input_product_property_property_id');
            $table->integer('price');
            $table->integer('for_num');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('input_product_property');
    }
};
