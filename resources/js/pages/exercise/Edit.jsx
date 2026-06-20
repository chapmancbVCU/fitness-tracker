import Forms from "@chappy/components/Forms";
import documentTitle from "@chappy/utils/documentTitle";
import React from "react";
import route from "@chappy/utils/route";
function Edit({ param, errors, exercise }) {

    const title = (param === 'new') ? "Add an Exercise" : "Edit Exercise";
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
                            label="Exercise Name"
                            name="name"
                            value={exercise.name}
                            inputAttrs={{className: 'form-control input-sm'}}
                            divAttrs={{className: 'form-group mb-3'}}
                        />
                        <div className="col-md-12 text-end mt-3">
                            <a href={route('exercise')} className="btn btn-default">Cancel</a>
                            <Forms.SubmitTag label={"Submit"} inputAttrs={{className: 'btn btn-primary'}}/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}        
export default Edit;