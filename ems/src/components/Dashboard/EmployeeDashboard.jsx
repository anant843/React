import React from "react";
import Header from "../../others/Header";
import TaskList from "../../others/TaskListNo";
import TaskLists from "../TaskList/TaskLists";

const EmployeeDashboard = (props) => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header changeUser={props.changeUser} data={props.data} user="employee" />
      <TaskList data={props.data} />
      <TaskLists data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
