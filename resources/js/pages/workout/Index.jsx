import Forms from "@chappy/components/Forms";
import route from "@chappy/utils/route";
import React from "react";
function Index({ beginTime, workoutTypes }) {
    
    return (
        <>
            <h1 className="text-center">Workout Setup ({beginTime})</h1>
            {workoutTypes.length > 0 ? (
                <div className="row align-items-center justify-content-center mt-5">
                    <div className="col-md-6 bg-light p-3">
                        <form className="form" method="post" action="">
                            <Forms.CSRFInput />
                            <Forms.Select 
                                label="Select Workout Type"
                                name="workout_type_id"
                                value=""
                                fieldName="name"
                                options={workoutTypes}
                                inputAttrs={{className: 'form-select input-sm'}}
                                divAttrs={{className: 'form-group mb-3'}}
                            />
                            <div className="col-md-12 text-end mt-3">
                                <a href={route('workout')} className="btn btn-default">Cancel</a>
                                <Forms.SubmitTag label={"Submit"} inputAttrs={{className: 'btn btn-primary'}}/>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <p className="text-center mt-5">You have no workout types yet.  
                    Click <a href={route('workoutType.edit', ['new'])}>here </a> to add a workout type.
                </p>
            )}
        </>
    );
}        
export default Index;