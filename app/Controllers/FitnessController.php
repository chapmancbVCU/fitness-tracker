<?php
namespace App\Controllers;
use Core\Controller;
use Core\Services\AuthService;

/**
 * Undocumented class
 */
class FitnessController extends Controller {
    /**
     * Runs when the object is constructed.
     *
     * @return void
     */
    public function onConstruct(): void {
        $this->view->setLayout('default');
    }

    public function indexAction(): void {
        $user = AuthService::currentUser();
        $this->view->renderJsx('fitness.Index', ['user' => $user]);
    }
}