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
        Schema::create('user', function (Blueprint $table) {
            $table->integer('user_id', true);
            $table->string('user_name', 100)->nullable();
            $table->string('email', 150)->nullable();
            $table->string('password', 20)->nullable();
            $table->string('phone', 15)->nullable();
            $table->string('country', 30)->nullable();
            $table->integer('role_id')->nullable()->index('user_role_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user');
    }
};
