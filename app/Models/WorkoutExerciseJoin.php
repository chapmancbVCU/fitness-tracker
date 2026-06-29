<?php
namespace App\Models;
use Core\Model;

/**
 * Implements features of the WorkoutExerciseJoin class.
 */
class WorkoutExerciseJoin extends Model {

    // Fields you don't want saved on form submit
    // public const blackList = [];

    // Set to name of database table.
    protected static $_table = 'workout_exercise_join';

    // Soft delete
    // protected static $_softDelete = true;
    
    // Fields from your database
    public $workout_id;
    public $exercise_id;

    public function afterDelete(): void {
        // Implement your function
    }

    public function afterSave(): void {
        // Implement your function
    }

    public function beforeDelete(): void {
        // Implement your function
    }

    public function beforeSave(): void {
        // Implement your function
    }

    /**
     * Performs validation for the WorkoutExerciseJoin model.
     *
     * @return void
     */
    public function validator(): void {
        // Implement your function
    }
}