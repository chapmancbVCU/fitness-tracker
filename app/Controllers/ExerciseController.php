<?php
namespace App\Controllers;

use App\Models\Exercise;
use Core\Controller;
use Core\Services\AuthService;

/**
 * Undocumented class
 */
class ExerciseController extends Controller {
    /**
     * Runs when the object is constructed.
     *
     * @return void
     */
    public function onConstruct(): void {
        $this->view->setLayout('default');
    }

    public function deleteAction(int $id): void {
        $exercise = Exercise::findById($id);
        if($this->request->isPost()) {
            $this->request->csrfCheck();
            $exercise->delete();
            redirect('exercise.Index');
        }
    }

    public function editAction(mixed $param): void {
        $user_id = AuthService::currentUser()->id;
        $exercise = ($param == 'new') ? new Exercise() : Exercise::findById($param);

        if($this->request->isPost()) {
            $this->request->csrfCheck();
            $exercise->assign($this->request->get());
            $exercise->user_id = $user_id;
            $exercise->save();
            if($exercise->validationPassed()) redirect('exercise.Index');
        }
        $props = [
            'param' => $param,
            'errors' => $exercise->getErrorMessages(),
            'exercise' => $exercise
        ];

        $this->view->renderJsx('exercise.Edit', $props);
    }

    public function indexAction(): void {
        $exercises = Exercise::findAllByUserId(AuthService::currentUser()->id);
        $this->view->renderJsx('exercise.Index', ['exercises' => $exercises]);
    }
}