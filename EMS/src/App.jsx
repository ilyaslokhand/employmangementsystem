import React, { useContext, useEffect, useState } from "react";
import Login from "./Compoents/Auth/Login";
import EmployeeDeshboard from "./Compoents/Dashboard/EmployeeDeshboard";
import AdminDeshboard from "./Compoents/Dashboard/AdminDeshboard";

import { AuthContext } from "./Context/AuthProvider";

const App = () => {
  const [User, setUser] = useState(null);
  const [Loggedinuserdata, setLoggedinuserdata] = useState(null);
  const [UserData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedinuser = localStorage.getItem("loggedinuser");
    if (loggedinuser) {
      const userData = JSON.parse(loggedinuser);
      setUser(userData.role);
      setLoggedinuserdata(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "1@gmail.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedinuser", JSON.stringify({ role: "admin" }));
    } else if (UserData) {
      const employee = UserData.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedinuserdata(employee);
        localStorage.setItem(
          "loggedinuser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("Please Write the correct credentials");
    }
  };

  return (
    <>
      {!User ? (
        <Login handleLogin={handleLogin} changeUser={setUser} />
      ) : User === "admin" ? (
        <AdminDeshboard changeUser={setUser} />
      ) : User === "employee" ? (
        <EmployeeDeshboard data={Loggedinuserdata} changeUser={setUser} />
      ) : null}
    </>
  );
};

export default App;
