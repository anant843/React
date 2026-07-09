import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const [userData,setUserData ] = useContext(AuthContext);

  return (
    <div className="bg-[#1C1C1C] mt-8 rounded-xl p-6">

      {/* Heading */}
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-emerald-400">
          Employee Task Status
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Monitor all employee task statistics
        </p>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-5 bg-[#2A2A2A] rounded-lg px-6 py-4 text-white font-semibold text-center">
        <div className="text-left">Employee</div>
        <div>New</div>
        <div>Accepted</div>
        <div>Completed</div>
        <div>Failed</div>
      </div>

      {/* Employee List */}
      <div className="mt-3 h-[250px] overflow-y-auto custom-scroll">

        {userData.map((emp,id) => (
          <div
            key={emp.id}
            className="grid grid-cols-5 items-center bg-[#242424] hover:bg-[#2F2F2F] transition-all duration-300 rounded-lg px-6 py-4 mb-3 border border-zinc-700 hover:border-emerald-500"
          >

            {/* Employee */}
            <div className="flex items-center gap-4">

              <div className="w-11 h-11 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-lg">
                {emp.firstName.charAt(0)}
              </div>

              <div>
                <h2 className="text-white font-semibold">
                  {emp.firstName}
                </h2>

                <p className="text-xs text-gray-400">
                  {emp.email}
                </p>
              </div>

            </div>

            {/* New Task */}
            <div className="flex justify-center">
              <span className="bg-blue-500/20 text-blue-400 px-4 py-1 rounded-md font-semibold">
                {emp.taskNumbers.newTask}
              </span>
            </div>

            {/* Accepted Task */}
            <div className="flex justify-center">
              <span className="bg-yellow-500/20 text-yellow-400 px-4 py-1 rounded-md font-semibold">
                {emp.taskNumbers.active}
              </span>
            </div>

            {/* Completed Task */}
            <div className="flex justify-center">
              <span className="bg-emerald-500/20 text-emerald-400 px-4 py-1 rounded-md font-semibold">
                {emp.taskNumbers.completed}
              </span>
            </div>

            {/* Failed Task */}
            <div className="flex justify-center">
              <span className="bg-red-500/20 text-red-400 px-4 py-1 rounded-md font-semibold">
                {emp.taskNumbers.failed}
              </span>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default AllTask;