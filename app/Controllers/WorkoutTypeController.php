<?php
namespace App\Controllers;

use App\Models\WorkoutType;
use Core\Controller;
use Core\Services\AuthService;

/**
 * Undocumented class
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
        $this->view->renderJsx('workouttype.Edit', $props);
    }

    public function indexAction(): void {
        $workoutTypes = WorkoutType::findAllByUserId(AuthService::currentUser()->id);
        $this->view->renderJsx("workouttype.Index", ['workoutTypes' => $workoutTypes]);
    }
}