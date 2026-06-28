<?php
namespace App\Models;
use Core\Model;
use Core\Traits\HasTimestamps;

/**
 * Implements features of the Exercise class.
 */
class Exercise extends Model {
    use HasTimestamps;

    // Fields you don't want saved on form submit
    // public const blackList = [];

    // Set to name of database table.
    protected static $_table = 'exercise';

    // Soft delete
    // protected static $_softDelete = true;
    
    // Fields from your database
    public $id;
    public string $name;
    public int $workout_id;

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
        $this->timeStamps();
    }

    public static function placeholder(int $user_id): Exercise {
        $placeholder = new Exercise();
        $placeholder->user_id = $user_id;
        $placeholder->name = "Please select an exercise";
        $placeholder->id = 0;
        return $placeholder;
    }

    /**
     * Performs validation for the Exercise model.
     *
     * @return void
     */
    public function validator(): void {
        // Implement your function
    }
}