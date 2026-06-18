<?php
namespace App\Controllers;

use App\Models\WorkoutType;
use Core\Controller;
use Core\Services\AuthService;

/**
 * Manages the rendering of views and supports ability to add, edit, 
 * and delete a workout type.
 */
class WorkoutTypeController extends Controller {
    /**
     * Runs when the object is constructed.
     *
     * @return void
     */
    public function onConstruct(): void {
        $this->view->setLayout('default');
    }

    /**
     * Performs the delete operation for a workout type.
     *
     * @param int $id The id for the workout type.
     * @return void
     */
    public function deleteAction(int $id): void {
        $workoutType = WorkoutType::findById($id);
        if($this->request->isPost()) {
            $this->request->csrfCheck();
            $workoutType->delete();
            redirect('workoutType.Index');
        }
    }

    /**
     * Performs both edit and add operations for adding a new workout type.
     *
     * @param mixed $param The word 'new' or the id for the workout type.
     * @return void
     */
    public function editAction(mixed $param): void {
        $user_id = AuthService::currentUser()->id;
        $workoutType = ($param == 'new') ? new WorkoutType() : WorkoutType::findById($param);

        if($this->request->isPost()) {
            $this->request->csrfCheck();
            $workoutType->assign($this->request->get());
            $workoutType->user_id = $user_id;
            $workoutType->save();
            if($workoutType->validationPassed()) redirect('workoutType.Index');
        }

        $props = [
            'param' => $param,
            'errors' => $workoutType->getErrorMessages(),
            'workoutType' => $workoutType
        ];
        $this->view->renderJsx('workoutType.Edit', $props);
    }

    /**
     * Renders index view.  Retrieves list of all workout types associated 
     * with a single user.
     *
     * @return void
     */
    public function indexAction(): void {
        $workoutTypes = WorkoutType::findAllByUserId(AuthService::currentUser()->id);
        $this->view->renderJsx("workoutType.Index", ['workoutTypes' => $workoutTypes]);
    }
}