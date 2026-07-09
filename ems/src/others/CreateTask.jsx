import React, { useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");

  const [taskDescription, setTaskDescription] = useState("");

  const [taskDate, setTaskDate] = useState("");

  const [assignTo, setAssignTo] = useState("");

  const [taskCategory, setTaskCategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      taskCategory,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    const data = userData;
    data.forEach(function (e) {
      if (assignTo == e.firstName) {
        e.tasks.push(newTask);
        e.taskNumbers.newTask = e.taskNumbers.newTask + 1;
      }
    });

    setUserData(data);
    console.log(data);

    setTaskTitle("");
    setAssignTo("");
    setTaskCategory("");
    setTaskDate("");
    setTaskDescription("");
  };

  return (
    <div className="mt-6">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex justify-between gap-8 rounded-xl bg-[#1c1c1c] p-6"
      >
        {/* Left Side */}
        <div className="w-1/2 flex flex-col">
          <div className="mb-3">
            <h3 className="mb-1 text-sm font-medium text-gray-300">
              Task Title
            </h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              type="text"
              placeholder="Make a UI Design"
              className="w-4/5 rounded-lg border border-gray-600 bg-transparent px-3 py-2.5 text-sm outline-none transition-all focus:border-emerald-500"
            />
          </div>

          <div className="mb-3">
            <h3 className="mb-1 text-sm font-medium text-gray-300">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              type="date"
              className="w-4/5 rounded-lg border border-gray-600 bg-transparent px-3 py-2.5 text-sm outline-none transition-all focus:border-emerald-500"
            />
          </div>

          <div className="mb-3">
            <h3 className="mb-1 text-sm font-medium text-gray-300">
              Assign To
            </h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              type="text"
              placeholder="Employee Name"
              className="w-4/5 rounded-lg border border-gray-600 bg-transparent px-3 py-2.5 text-sm outline-none transition-all focus:border-emerald-500"
            />
          </div>

          <div>
            <h3 className="mb-1 text-sm font-medium text-gray-300">Category</h3>
            <input
              value={taskCategory}
              onChange={(e) => {
                setTaskCategory(e.target.value);
              }}
              type="text"
              placeholder="Design, Development, etc."
              className="w-4/5 rounded-lg border border-gray-600 bg-transparent px-3 py-2.5 text-sm outline-none transition-all focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 flex flex-col">
          <h3 className="mb-1 text-sm font-medium text-gray-300">
            Description
          </h3>

          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            rows="8"
            placeholder="Enter task description..."
            className="rounded-lg border border-gray-600 bg-transparent p-3 text-sm outline-none resize-none transition-all focus:border-emerald-500"
          ></textarea>

          <button className="mt-4 rounded-lg bg-emerald-500 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-emerald-600">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
