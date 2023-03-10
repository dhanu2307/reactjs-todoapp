/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import DisplayCompletedTodos from "./DisplayCompletedTodos/DisplayCompletedTodos";
import DisplayPendingTodos from "./DisplayPendingTodos/DisplayPendingTodos";
import "./App.css";
import Todos from "./Utils/Data";

const InpArr = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [id, setId] = useState(null);
    const [obj, setObj] = useState({ task: "" });
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Todos);
        // console.log(data);
    }, []);

    const handleChange = (e) => {
        e.preventDefault();

        const { value, name } = e.target;
        setObj({ ...obj, [name]: value });
    };

    const handleClick = (e) => {
        e.preventDefault();

        if (obj.task === undefined || obj.task === "") return;

        if (isEdit) {
            // console.log(obj);
            let newData = data.filter((item, i) => {
                if (id === item.id) {
                    item.task = obj.task;
                    // console.log(item)
                    // console.log(data)
                }
                return setData(data);
            });
            console.log(newData);
            setIsEdit(false);
            setId(null);
        } else {
            // console.log(obj);
            const { task } = obj;
            setData([
                ...data,
                {
                    task,
                    id: Math.random(),
                    isCompleted: false,
                    date: new Date().toLocaleString(),
                },
            ]);
        }
        setObj({ task: "" });
    };

    const handleDelete = (ind) => {
        // console.log(ind);
        setIsEdit(false);
        let newData = data.filter((item) => item.id !== ind);
        // console.log(newData);
        setData(newData);
        setObj({ task: "" });
    };
    const handleComplete = (item, ind) => {
        setIsEdit(false);
        console.log(item);
        data.map((item) => {
            if (item.id === ind) {
                item.isCompleted = true;
            }
        });
        // console.log(data)
        setObj({ task: "" });
    };

    const handleEdit = (item, ind) => {
        // console.log(item)
        setIsEdit(true);
        const { task } = item;
        setObj({
            task,
            id: Math.random(),
            isCompleted: false,
            date: new Date().toLocaleString(),
        });
        setId(ind);
    };

    return (
        <div className="maincontainer">
            <div className="inputcontainer">
                <input
                    type="text"
                    name="task"
                    id="task"
                    value={obj.task}
                    placeholder="Enter task"
                    onChange={handleChange}
                />
                <input
                    type="button"
                    value={isEdit ? "Update" : "Add"}
                    onClick={handleClick}
                    style={{ "--i": "#20c997" }}
                />
            </div>

            <div className="outputcontainer">
                <DisplayPendingTodos
                    data={data}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    handleComplete={handleComplete}
                    title="Pending"
                />
                <DisplayCompletedTodos data={data} title="Completed" />
            </div>
        </div>
    );
};

export default InpArr;
