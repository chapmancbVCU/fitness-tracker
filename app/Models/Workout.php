<?php
namespace App\Models;
use Core\Model;
use Core\Traits\HasTimestamps;

/**
 * Implements features of the Workout class.
 */
class Workout extends Model {
    use HasTimestamps;
    // Fields you don't want saved on form submit
    // public const blackList = [];

    // Set to name of database table.
    protected static $_table = 'workout';

    // Soft delete
    // protected static $_softDelete = true;
    
    // Fields from your database
    public $created_at;
    public $id;
    public $notes;
    public $updatedAt;
    public $user_id;


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

    /**
     * Performs validation for the Workout model.
     *
     * @return void
     */
    public function validator(): void {
        // Implement your function
    }
}