import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div className="h-full w-[300px] bg-pink-400 rounded-xl flex-shrink-0 p-5 text-white">
      <div className="flex justify-between items-center">
        <h3 className="px-3 py-1 rounded bg-red-600 text-sm">
          {data.taskCategory}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold ">{data.taskTitle}</h2>
      <p className="mt-2 text-sm">{data.taskDescription}</p>
      <div className="mt-4">
        <button className="bg-green-500 text-sm px-2 py-1 w-full rounded">
          Failed Task
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
