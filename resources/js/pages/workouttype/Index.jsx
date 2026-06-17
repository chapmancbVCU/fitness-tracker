import React from "react";
import documentTitle from "@chappy/utils/documentTitle";
import route from "@chappy/utils/route";

function Index({ workoutTypes }) {
    documentTitle("My Workouts");
    return (
        <>
            <div className="d-flex justify-content-center">
                <h1 className="text-center">My Workouts</h1>
                <a href={route('workoutType.edit', ['new'])} className="btn btn-primary btn-sm mx-2 mb-3">
                    <i className="fa fa-add mt-2"></i>Add
                </a>

            </div>
            <table className="w-50 mx-auto table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {workoutTypes.map((workoutType) => (
                        <tr key={workoutType.id}>
                            <td>
                                {workoutType.name}
                            </td>
                            <td className="text-center w-25">
                                <a href={route('workoutType.Edit', [workoutType.id])} className="btn btn-info btn-sm">
                                    <i className="fa fa-edit"></i> Edit
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </>
    );
}        
export default Index;