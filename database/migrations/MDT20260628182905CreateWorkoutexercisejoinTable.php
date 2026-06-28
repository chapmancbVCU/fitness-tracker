<?php
namespace Database\Migrations;
use Core\Lib\Database\Schema;
use Core\Lib\Database\Blueprint;
use Core\Lib\Database\Migration;

/**
 * Migration class for the workout_exercise_join table.
 */
class MDT20260628182905CreateWorkoutexercisejoinTable extends Migration {
    /**
     * Performs a migration for a new table.
     *
     * @return void
     */
    public function up(): void {
        Schema::create('workout_exercise_join', function (Blueprint $table) {
            $table->id();
            $table->integer('workout_id');
            $table->index('workout_id');
            $table->integer('exercise_id')->unique();
            $table->index('exercise_id');
        });
    }

    /**
     * Undo a migration task.
     *
     * @return void
     */
    public function down(): void {
        Schema::dropIfExists('workout_exercise_join');
    }
}