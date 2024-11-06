import React, { useState } from "react";

const Header = (props) => {
  const logoutuser = () => {
    localStorage.setItem("loggedinuser", "");
    props.changeUser("");
  };

  return (
    <div className="flex items-end justify-between text-white ">
      <h1 className="text-2xl font-bold">
        Hello
        <br />
        <span className="text-3xl font-semibold">Username</span>
      </h1>
      <button
        className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm"
        onClick={logoutuser}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
