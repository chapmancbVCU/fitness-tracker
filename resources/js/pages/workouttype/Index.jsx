import React from "react";
import documentTitle from "@chappy/utils/documentTitle";
import route from "@chappy/utils/route";
function Index() {
    documentTitle("My Workouts");

    return (
        <>
            <div className="d-flex justify-content-center">
                <h1 className="text-center">My Workouts</h1>
                <a href={route('workoutType.edit', ['new'])} className="btn btn-primary btn-sm mx-2 mb-3">
                    <i class="fa fa-add mt-2"></i>Add
                </a>
            </div>
            
        </>
    );
}        
export default Index;