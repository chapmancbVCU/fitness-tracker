import React from "react";
import route from "@chappy/utils/route";
import Forms from "@chappy/components/Forms";

function Exercises({ exercises, workoutType }) {

    return (
        <>
            <h1 className="text-center">Track Your {workoutType.name} Workout</h1>
            
            {exercises.length > 0 ? (
                <div className="row align-items-center justify-content-center mt-5">
                    <div className="col-md-6 bg-light p-3">
                        <form className="form" method="post" action="">
                            <Forms.CSRFInput />
                            <Forms.Select 
                                label="Select an Exercise"
                                name="exercise_id"
                                value=""
                                fieldName="name"
                                options={exercises}
                                inputAttrs={{className: 'form-select input-sm'}}
                                divAttrs={{className: 'form-group mb-3'}}
                            />
                            <div className="col-mnd-12 text-end mt-3">
                                <Forms.SubmitTag label={"Submit"} inputAttrs={{className: 'btn btn-primary'}} />
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <p className="text-center mt-5">You have added any exercises yet.  
                    Click <a href={route('exercises.edit', ['new'])}>here </a> to add a workout type.
                </p>
            )}
        </>
    );
}        
export default Exercises;