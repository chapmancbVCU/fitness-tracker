import documentTitle from "@chappy/utils/documentTitle";
import React from "react";
function Edit({ param }) {

    if(param === 'new') documentTitle("Add a new workout type");

    return (
        <>
            {param === 'new' ? (
                <h1 className="text-center">Add a new workout type</h1>
            ) : (
                <h1 className="text-center">Edit your workout</h1>
            )}        
        </>
    );
}        
export default Edit;