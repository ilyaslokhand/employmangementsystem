import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const CreateTask = () => {
  const [UserData, setUserData] = useContext(AuthContext);

  const [taskTitle, settaskTitle] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [AsssignTo, setAsssignTo] = useState("");
  const [taskCategory, settaskCategory] = useState("");
  const [taskDescription, settaskDescription] = useState("");

  const formsubmithandle = (e) => {
    e.preventDefault();

    // Create a new task object
    const task = {
      taskTitle,
      taskDate,
      AsssignTo,
      taskCategory,
      taskDescription,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    // Create a copy of UserData to avoid direct mutation
    const updatedData = [...UserData];

    // Update the data with the new task if assigned user is found
    updatedData.forEach((elem) => {
      if (AsssignTo === elem.firstName) {
        elem.tasks.push(task);
        elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1;
      }
    });

    // Update the UserData context with the modified copy
    setUserData(updatedData);
    console.log(updatedData);

    // Reset form fields
    settaskTitle("");
    settaskDate("");
    setAsssignTo("");
    settaskCategory("");
    settaskDescription("");
  };

  return (
    <div className="bg-[#1c1c1c] mt-7 rounded p-5  ">
      <form
        className="text-white flex items-start justify-between w-full  flex-wrap "
        onSubmit={(e) => {
          formsubmithandle(e);
        }}
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm mb-1 text-gray-300"> Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => settaskTitle(e.target.value)}
              placeholder="Make A Ui Design"
              type="text"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
          <div>
            <h3 className="text-sm mb-1 text-gray-300">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => settaskDate(e.target.value)}
              type="date"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
          <div>
            <h3 className="text-sm mb-1 text-gray-300">Asssign To</h3>
            <input
              value={AsssignTo}
              onChange={(e) => setAsssignTo(e.target.value)}
              type="text"
              placeholder="employee name"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
          <div>
            <h3 className="text-sm mb-1 text-gray-300">Catagory</h3>
            <input
              value={taskCategory}
              onChange={(e) => settaskCategory(e.target.value)}
              type="text"
              placeholder="Design , Dev etc"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
        </div>

        <div className="w-1/2 flex-col items-start">
          <h3 className="text-sm mb-1 text-gray-300">Discription</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => settaskDescription(e.target.value)}
            name=""
            id=""
            col="30"
            rows="10"
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 "
          />
        </div>

        <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
