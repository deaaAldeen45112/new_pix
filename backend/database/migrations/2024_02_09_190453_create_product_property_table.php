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
        Schema::create('product_property', function (Blueprint $table) {
            $table->integer('product_property_id', true);
            $table->string('product_property_name', 100)->nullable();
            $table->string('product_property_desc', 1000)->nullable();
            $table->integer('type_id')->nullable();
            $table->string('img_name', 100)->nullable();
            $table->integer('product_id')->nullable()->index('product_property_product_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_property');
    }
};
