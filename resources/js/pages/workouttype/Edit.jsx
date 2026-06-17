import documentTitle from "@chappy/utils/documentTitle";
import React from "react";
import Forms from "@chappy/components/Forms";
import route from "@chappy/utils/route";
function Edit({ param, errors }) {

    if(param === 'new') documentTitle("Add a new workout type");

    return (
        <>
            {param === 'new' ? (
                <h1 className="text-center">Add a new workout type</h1>
            ) : (
                <h1 className="text-center">Edit your workout</h1>
            )}

            <div className="row align-items-center justify-content-center mt-5">
                <div className="col-md-6 bg-light p-3">
                    <form className="form" method="post" action="">
                        <Forms.CSRFInput />
                        <Forms.DisplayErrors errors={errors} />
                        <Forms.Input 
                            type="text"
                            label="Workout Name"
                            name="name"
                            value=""
                            inputAttrs={{className: 'form-control input-sm'}}
                            outputAttrs={{className: 'form-group mb-3'}}
                        />
                        <div className="col-md-12 text-end mt-3">
                            <a href={route('workoutType')} className="btn btn-default">Cancel</a>
                            <Forms.SubmitTag label={"Submit"} inputAttrs={{className: 'btn btn-primary'}}/>
                        </div>
                    </form>  
                </div>
            </div>
        </>
    );
}        
export default Edit;