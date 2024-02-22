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
        Schema::table('option_product_property', function (Blueprint $table) {
            $table->foreign(['product_property_id'], 'option_property_product_property_id')->references(['product_property_id'])->on('product_property')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('option_product_property', function (Blueprint $table) {
            $table->dropForeign('option_property_product_property_id');
        });
    }
};
