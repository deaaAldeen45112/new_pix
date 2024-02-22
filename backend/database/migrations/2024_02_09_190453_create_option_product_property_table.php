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
        Schema::create('option_product_property', function (Blueprint $table) {
            $table->integer('option_product_property_id', true);
            $table->integer('product_property_id')->nullable()->index('option_property_product_property_id');
            $table->string('option_name', 100)->nullable();
            $table->string('option_img', 100)->nullable();
            $table->integer('option_price')->nullable();
            $table->boolean('option_default')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('option_product_property');
    }
};
