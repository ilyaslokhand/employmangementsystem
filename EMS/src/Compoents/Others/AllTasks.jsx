import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const AllTasks = () => {
  const [UserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-48">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded flex-wrap">
        <div className="w-1/5 text-center">
          <h2 className="text-lg font-medium">Employee Name</h2>
        </div>
        <div className="w-1/5 text-center">
          <h3 className="text-lg font-medium">New Task</h3>
        </div>
        <div className="w-1/5 text-center">
          <h5 className="text-lg font-medium">Active Task</h5>
        </div>
        <div className="w-1/5 text-center">
          <h5 className="text-lg font-medium">Completed</h5>
        </div>
        <div className="w-1/5 text-center">
          <h5 className="text-lg font-medium">Failed</h5>
        </div>
      </div>

      <div className="h-[80%] overflow-auto">
        {UserData && UserData.length > 0 ? (
          UserData.map((elem, index) => (
            <div
              key={index}
              className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded flex-wrap"
            >
              <div className="w-1/5 text-center">
                <h2 className="text-lg font-medium">{elem.firstName}</h2>
              </div>
              <div className="w-1/5 text-center">
                <h3 className="text-lg font-medium text-red-600">
                  {elem.taskNumbers.newTask}
                </h3>
              </div>
              <div className="w-1/5 text-center">
                <h5 className="text-lg font-medium text-blue-400">
                  {elem.taskNumbers.active}
                </h5>
              </div>
              <div className="w-1/5 text-center">
                <h5 className="text-lg font-medium text-pink-400">
                  {elem.taskNumbers.completed}
                </h5>
              </div>
              <div className="w-1/5 text-center">
                <h5 className="text-lg font-medium">
                  {elem.taskNumbers.failed}
                </h5>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No tasks available.</p>
        )}
      </div>
    </div>
  );
};

export default AllTasks;
