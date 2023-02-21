/* eslint-disable array-callback-return */
import React from "react";
import "./DisplayPendingTodos.css";

const DisplayPendingTodos = ({
    data,
    handleDelete,
    handleEdit,
    handleComplete,
    title,
}) => {
    return (
        <div className="todocontainer">
            <h4 className="heading" style={{ "--i": "#f00" }}>
                {title} Tasks
            </h4>
            <div className="headings">
                <div className="headingTitle">Tasks</div>
                <div className="headingTitle">Created At</div>
                <div className="headingTitle">Actions</div>
            </div>
            {data.map((item, index) => {
                if (title === "Pending") {
                    if (!item.isCompleted) {
                        return (
                            <div className="container" key={item.id}>
                                <div className="task">{item.task}</div>
                                <div className="task">{item.date}</div>
                                <div className="button">
                                    {(item.task !== "Sample Incomplete Data" || index!==0) && (
                                        <>
                                            <input
                                                type="button"
                                                value="Delete"
                                                onClick={() =>
                                                    handleDelete(item.id)
                                                }
                                                style={{ "--i": "#FBBC05" }}
                                            />
                                            <input
                                                type="button"
                                                value="Edit"
                                                onClick={() =>
                                                    handleEdit(item, item.id)
                                                }
                                                style={{ "--i": "#0dcaf0" }}
                                            />
                                            <input
                                                type="button"
                                                value="Completed"
                                                onClick={() =>
                                                    handleComplete(
                                                        item,
                                                        item.id
                                                    )
                                                }
                                                style={{ "--i": "#d63384" }}
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    }
                }
            })}
        </div>
    );
};

export default DisplayPendingTodos;
