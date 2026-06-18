import documentTitle from "@chappy/utils/documentTitle";
import React from "react";
import Forms from "@chappy/components/Forms";
import route from "@chappy/utils/route";

function Edit({ param, errors, workoutType }) {

    const title = (param === 'new') ? "Add a new workout type" : "Edit workout type name"
    documentTitle(title)
    return (
        <>
            <h1 className="text-center">{title}</h1>
          
            <div className="row align-items-center justify-content-center mt-5">
                <div className="col-md-6 bg-light p-3">
                    <form className="form" method="post" action="">
                        <Forms.CSRFInput />
                        <Forms.DisplayErrors errors={errors} />
                        <Forms.Input 
                            type="text"
                            label="Workout Name"
                            name="name"
                            value={workoutType.name}
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