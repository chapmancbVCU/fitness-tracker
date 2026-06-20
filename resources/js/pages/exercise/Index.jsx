import documentTitle from "@chappy/utils/documentTitle";
import route from "@chappy/utils/route";
import React from "react";
import Forms from "@chappy/components/Forms";

function Index({ exercises }) {
    documentTitle("Your Exercises")
    console.log(exercises)
    async function onDeleteClick(e) {
        if(!window.confirm("Are you sure")) {
            e.preventDefault();
            return false;
        }
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <h1 className="me-3">Your Exercises</h1>
                <a href={route('exercise.edit', ['new'])}  className="btn btn-primary btm-sm-mx-2">
                    <i className="fa fa-add"></i>Add
                </a>
            </div>
            <table className="w-50 mt-5 mx-auto table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {exercises.map((exercise) => (
                        <tr key={exercise.id}>
                            <td>{exercise.name}</td>
                            <td className="text-center w-25">
                                <a href={route('exercise.Edit', [exercise.id])} className="btn btn-info btn-sm">
                                    <i className="fa fa-edit"></i>Edit
                                </a>
                                <form method="post"
                                    action={route('exercise.Delete', [exercise.id])}
                                    className="d-inline-block"
                                    onSubmit={onDeleteClick}>
                                    <Forms.CSRFInput />
                                    <button type="submit"
                                        className="btn btn-danger btn-sm ms-2">
                                        <i className="fa fa-trash"></i> Delete
                                    </button>
                                </form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}        
export default Index;