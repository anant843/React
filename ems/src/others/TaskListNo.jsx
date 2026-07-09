import React from "react";

const TaskList = ({ data }) => {
  return (
    <div className="flex mt-10 justify-between gap-5">

      {/* New Task */}
      <div className="flex-1 bg-gradient-to-br from-violet-500 via-purple-600 to-fuchsia-600 rounded-2xl p-6 shadow-xl hover:shadow-purple-500/30 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
        <h2 className="text-5xl font-bold text-white">
          {data.taskNumbers.newTask}
        </h2>

        <h3 className="text-xl font-semibold text-purple-100 mt-3">
          📝 New Task
        </h3>
      </div>

      {/* Completed Task */}
      <div className="flex-1 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-6 shadow-xl hover:shadow-green-500/30 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
        <h2 className="text-5xl font-bold text-white">
          {data.taskNumbers.completed}
        </h2>

        <h3 className="text-xl font-semibold text-green-100 mt-3">
          ✅ Completed
        </h3>
      </div>

      {/* Accepted Task */}
      <div className="flex-1 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl p-6 shadow-xl hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
        <h2 className="text-5xl font-bold text-white">
          {data.taskNumbers.active}
        </h2>

        <h3 className="text-xl font-semibold text-blue-100 mt-3">
          🚀 Accepted
        </h3>
      </div>

      {/* Failed Task */}
      <div className="flex-1 bg-gradient-to-br from-rose-500 to-red-600 rounded-2xl p-6 shadow-xl hover:shadow-red-500/30 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
        <h2 className="text-5xl font-bold text-white">
          {data.taskNumbers.failed}
        </h2>

        <h3 className="text-xl font-semibold text-red-100 mt-3">
          ❌ Failed
        </h3>
      </div>

    </div>
  );
};

export default TaskList;