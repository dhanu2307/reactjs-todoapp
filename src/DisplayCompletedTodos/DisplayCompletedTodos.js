/* eslint-disable array-callback-return */
import React from "react";
import "./DisplayCompletedTodos.css";

const DisplayCompletedTodos = ({ data, title }) => {
    return (
        <div className="todocontainer">
            <h4 className="heading" style={{ "--i": "#0f0" }}>
                {title} Tasks
            </h4>
            <div className="headings completedheading">
                <div></div>
                <div className="headingTitle">Tasks</div>
                <div className="headingTitle">Created At</div>
                <div></div>
            </div>
            {data.map((item, index) => {
                if (title === "Completed") {
                    if (item.isCompleted) {
                        return (
                            <div
                                className="container completedcontainer"
                                key={index}
                            >
                                <div></div>
                                <span className="task">{item.task}</span>
                                <span className="date">{item.date}</span>
                                <div></div>
                            </div>
                        );
                    }
                }
            })}
        </div>
    );
};

export default DisplayCompletedTodos;
