import route from "@chappy/utils/route";
import React from "react";

function Index({ user }) {

    return (
        <>
            {user ? (
                <div className="d-flex justify-content-center">
                    <div className="d-flex align-items-center">
                        <h1>{user.fname}'s Workout History</h1>
                        <a href={route('workout.index')} className="btn btn-primary btn-sm mx-2">
                            <i className="fa fa-add"></i>Begin
                        </a>
                    </div>
                </div>
            ) : (
                <h1 className="text-center">Login to view and track your workouts</h1>
            )}
        </>
    );
}        
export default Index;