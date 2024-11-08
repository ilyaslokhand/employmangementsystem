import React from "react";

const Header = (props) => {
  const logoutuser = () => {
    localStorage.setItem("loggedinuser", "");
    props.changeUser("");
  };

  return (
    <div className="flex items-end justify-between text-white p-4 sm:p-6">
      <h1 className="text-lg sm:text-2xl font-bold">
        Hello
        <br />
        <span className="text-xl sm:text-3xl font-semibold">Username</span>
      </h1>
      <button
        className="bg-red-600 text-sm sm:text-base font-medium text-white px-3 py-1.5 sm:px-5 sm:py-2 rounded-sm"
        onClick={logoutuser}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
