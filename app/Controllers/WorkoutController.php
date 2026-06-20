<?php
namespace App\Controllers;

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

        $this->view->renderJsx('workout.Index', $props);
    }

    public function exercisesAction(): void {
        if($this->request->isPost()) {
            $this->request->csrfCheck();
            $workoutTypeId = $this->request->get('workout_type_id');
            $workoutType = WorkoutType::findById((int)$workoutTypeId);
            $this->view->renderJsx('workout.Exercises', ['workoutType' => $workoutType]);
        }
    }
}