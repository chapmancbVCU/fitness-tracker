import React from "react";
import asset from '@chappy/utils/asset'
/**
 * The home page.
 * @property {object} user The currently logged in user.
 * @property {string} version The current version of the Chappy.php framework.
 * @param {InputProps} param0 
 * @returns {JSX.Element} The contents of Index view.
 */
export default function Index({ user, version }) {
    const name = user.fname ?? 'Guest';
    return (
        <div className="container">
            <div className="text-center">
                <h1 className="display-4">Hello, {name} 👋</h1>
                <h1 className="display-4">Welcome to</h1>
                <div className="col-12 mx-auto text-center">
                    <img className="w-50" src={asset("public/logo.png", true)} alt="Framework Logo" />
                </div>
                <p className="lead my-3">
                    A lightweight and modern PHP framework built for simplicity, speed, and the power of React.js.
                </p>
                <p className="lead my-3">This view is powered by React + Vite.</p>

                <div className="d-flex justify-content-center mt-4 flex-wrap gap-3">
                    <a className="btn btn-primary" href="https://chapmancbvcu.github.io/chappy-php-starter/">📘 View Documentation</a>
                </div>
            </div>

            <hr className="my-5"/>

            <div className="row text-center g-4">
                <div className="col-md-4">
                    <h4>🔧 MVC Architecture</h4>
                    <p>Familiar routing and controller setup with simple view rendering.</p>
                </div>
                <div className="col-md-4">
                    <h4>🛡️ Custom Forms With Validation</h4>
                    <p>A FormHelper class with support for many commonly used elements and built-in server-side form validation with error message support.</p>
                </div>
                <div className="col-md-4">
                    <h4>⚙️ Project Generator</h4>
                    <p>Generate project skeletons and database migrations using console commands.</p>
                </div>
            </div>

            <div className="row text-center g-4 mt-4">
                <div className="col-md-4">
                    <h4>🧩 Composer and npm Support</h4>
                    <p>Manage your dependencies using Composer and npm.</p>
                </div>
                <div className="col-md-4">
                    <h4>📁 User Management</h4>
                    <p>Includes ACL support and authentication out of the box.</p>
                </div>
                <div className="col-md-4">
                    <h4>📄 Simple Documentation</h4>
                    <p>Markdown and API documentation included and easy to customize.</p>
                </div>
            </div>
            <p className="text-center text-muted mt-5">
                To customize this page, edit <code>resources/js/pages/home/Index.jsx</code> and <code>app/Controllers/HomeController.php</code>.
            </p>
            <p className="text-center text-muted mb-5">
                Chappy.php Framework v{version}
            </p>
        </div>
    );
}