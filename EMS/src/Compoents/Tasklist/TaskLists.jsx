import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskLists = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[50%] overflow-x-auto flex flex-wrap sm:flex-nowrap items-center justify-start gap-3 sm:gap-5 w-full py-1 mt-8 sm:mt-16"
    >
      {data.tasks.map((e, index) => {
        if (e.active) {
          return <AcceptTask key={index} data={e} />;
        }
        if (e.newTask) {
          return <NewTask key={index} data={e} />;
        }
        if (e.completed) {
          return <CompleteTask key={index} data={e} />;
        }
        if (e.failed) {
          return <FailedTask key={index} data={e} />;
        }
      })}
    </div>
  );
};

export default TaskLists;
