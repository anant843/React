import React from "react";
import Header from "../../others/Header";
import CreateTask from "../../others/CreateTask";
import AllTask from "../../others/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full bg-[#111] p-10 text-white">
      <Header changeUser={props.changeUser} user="admin" />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
