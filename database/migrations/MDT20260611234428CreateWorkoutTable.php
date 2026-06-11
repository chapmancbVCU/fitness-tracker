<?php
namespace Database\Migrations;
use Core\Lib\Database\Schema;
use Core\Lib\Database\Blueprint;
use Core\Lib\Database\Migration;

/**
 * Migration class for the workout table.
 */
class MDT20260611234428CreateWorkoutTable extends Migration {
    /**
     * Performs a migration for a new table.
     *
     * @return void
     */
    public function up(): void {
        Schema::create('workout', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->integer('workout_type_id');
            $table->timestamps();

            // Indexes
            $table->index('user_id');
            $table->index('workout_type_id');
        });
    }

    /**
     * Undo a migration task.
     *
     * @return void
     */
    public function down(): void {
        Schema::dropIfExists('workout');
    }
}