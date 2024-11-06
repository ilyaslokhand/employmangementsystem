import React from "react";
import Header from "../Others/Header";
import TaskListNumber from "../Others/TaskListNumber";
import TaskLists from "../Tasklist/TaskLists";

const EmployeeDeshboard = (props) => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header data={props.data} changeUser={props.changeUser} />
      <TaskListNumber data={props.data} />
      <TaskLists data={props.data} />
    </div>
  );
};

export default EmployeeDeshboard;
