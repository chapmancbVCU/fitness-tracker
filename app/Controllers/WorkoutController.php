<?php
namespace App\Controllers;

use App\Models\Exercise;
use App\Models\WorkoutType;
use Core\Controller;
use Core\Lib\Utilities\DateTime;
use Core\Services\AuthService;

/**
 * Undocumented class
 */
class WorkoutController extends Controller {
    /**
     * Runs when the object is constructed.
     *
     * @return void
     */
    public function onConstruct(): void {
        $this->view->setLayout('default');
    }

    public function indexAction(): void {
        $workoutTypes = WorkoutType::findAllByUserId(AuthService::currentUser()->id);

        $time = DateTime::timeStamps();
        
        $props = [
            'workoutTypes' => $workoutTypes,
            'beginTime' => DateTime::formatTime($time, DateTime::FORMAT_DATE_ONLY)
        ];

        if($this->request->isPost()) {
            $this->request->csrfCheck();
            $workoutTypeId = $this->request->get('workout_type_id');
            redirect('workout.Exercises', [$workoutTypeId, 'new']);
        }

        $this->view->renderJsx('workout.Index', $props);
    }

    public function exercisesAction(int $workoutTypeId, mixed $param): void {
        $workoutType = WorkoutType::findById($workoutTypeId);
        $exercises = Exercise::find();

        $props = [
            'exercises' => $exercises,
            'workoutType' => $workoutType
        ];

        if($this->request->isPost()) {

        }
        $this->view->renderJsx('workout.Exercises', $props);
    }

    
}