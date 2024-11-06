import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    setemail("");
    handleLogin(email, password);
    setpassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          className="flex flex-col justify-center items-center "
          onSubmit={(e) => handlesubmit(e)}
        >
          <input
            value={email}
            type="email"
            placeholder="enter your email"
            className="border-2 border-emerald-600 rounded-full py-3 px-4 text-white outline-none placeholder:text-white bg-transparent"
            required
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            value={password}
            type="password"
            placeholder="enter your password"
            className="border-2 border-emerald-600 rounded-full py-3 px-4 text-white outline-none placeholder:text-white bg-transparent mt-3"
            required
            onChange={(e) => setpassword(e.target.value)}
          />
          <button className=" mt-5 border-emerald-600 rounded-full py-3 px-4 text-white outline-none placeholder:text-white bg-green-400 border-none w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
