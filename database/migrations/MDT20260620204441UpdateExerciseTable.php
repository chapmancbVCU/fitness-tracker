<?php
namespace Database\Migrations;
use Core\Lib\Database\Schema;
use Core\Lib\Database\Blueprint;
use Core\Lib\Database\Migration;

/**
 * Migration class for the exercise table that adds user_id field to the table.
 */
class MDT20260620204441UpdateExerciseTable extends Migration {
    /**
     * Performs a migration for updating an existing table.
     *
     * @return void
     */
    public function up(): void {
        Schema::table('exercise', function (Blueprint $table) {
            $table->integer('user_id');
            $table->index('user_id');
        });
    }

    /**
     * Undo a migration task.
     *
     * @return void
     */
    public function down(): void {
        Schema::dropIfExists('exercise');
    }
}