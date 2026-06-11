<?php
namespace Database\Migrations;
use Core\Lib\Database\Schema;
use Core\Lib\Database\Blueprint;
use Core\Lib\Database\Migration;

/**
 * Migration class for the set table.
 */
class MDT20260611235223CreateSetTable extends Migration {
    /**
     * Performs a migration for a new table.
     *
     * @return void
     */
    public function up(): void {
        Schema::create('set', function (Blueprint $table) {
            $table->id();
            $table->integer('reps');
            $table->string('notes', 255);
        });
    }

    /**
     * Undo a migration task.
     *
     * @return void
     */
    public function down(): void {
        Schema::dropIfExists('set');
    }
}