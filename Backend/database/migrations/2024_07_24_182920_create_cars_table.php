<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->string('photo1');
            $table->string('photo2');
            $table->string('brand');
            $table->smallInteger('model');
            $table->string('fuel_type');
            $table->float('price', 10, 2);
            $table->string('gearbox');
            $table->boolean('available');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cars');
    }
};
