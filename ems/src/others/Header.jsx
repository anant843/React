import React, { useState } from "react";

const Header = (props) => {
  const getUsername = () => {
    if (props.user === "admin") {
      return "Admin";
    } else if (props.user === "employee" && props.data) {
      return props.data.firstName;
    }
    return "User";
  };

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };

  return (
    <div className="flex items-center justify-between bg-[#1f2937] px-8 py-6 rounded-2xl shadow-lg border border-gray-700">
      <h1 className="text-gray-300 text-xl font-medium leading-tight">
        Hello 👋 <br />
        <span className="text-white text-4xl font-bold tracking-wide">
          {getUsername()} <span className="text-3xl">👽</span>
        </span>
      </h1>

      <button
        onClick={logOutUser}
        className="bg-red-600 hover:bg-red-700 active:scale-95 transition-all duration-300 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-red-500/30"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;