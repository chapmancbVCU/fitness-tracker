import route from "@chappy/utils/route";
import React from "react";
function Index({ exercises }) {
    console.log(exercises)
    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <h1>Your Exercises</h1>
                <a href={route('exercise.edit', ['new'])}  className="btn btn-primary btm-sm-mx-2">
                    <i className="fa fa-add"></i>Add
                </a>
            </div>
        </>
    );
}        
export default Index;