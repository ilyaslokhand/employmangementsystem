import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap mt-6 sm:mt-10 justify-between gap-4 sm:gap-5">
      <div className="rounded-xl w-full sm:w-[45%] py-4 px-6 sm:py-6 sm:px-9 bg-blue-400 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">
          {data.taskNumbers.newTask}
        </h2>
        <h3 className="text-lg sm:text-xl mt-0.5 font-medium">New Task</h3>
      </div>
      <div className="rounded-xl w-full sm:w-[45%] py-4 px-6 sm:py-6 sm:px-9 bg-green-400 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">
          {data.taskNumbers.completed}
        </h2>
        <h3 className="text-lg sm:text-xl mt-0.5 font-medium">
          Completed Task
        </h3>
      </div>
      <div className="rounded-xl w-full sm:w-[45%] py-4 px-6 sm:py-6 sm:px-9 bg-yellow-400 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">
          {data.taskNumbers.active}
        </h2>
        <h3 className="text-lg sm:text-xl mt-0.5 font-medium">Accepted Task</h3>
      </div>
      <div className="rounded-xl w-full sm:w-[45%] py-4 px-6 sm:py-6 sm:px-9 bg-red-400 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">
          {data.taskNumbers.failed}
        </h2>
        <h3 className="text-lg sm:text-xl mt-0.5 font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
