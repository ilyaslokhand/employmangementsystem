import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTasks from "../Others/AllTasks";
const AdminDeshboard = (props) => {
  return (
    <div className="h-screen w-full p-7">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTasks />
    </div>
  );
};

export default AdminDeshboard;
