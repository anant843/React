import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);

    console.log("Email is", email);
    console.log("Password is", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black">

      <div className="w-[420px] rounded-3xl border border-emerald-500/30 bg-slate-900/80 backdrop-blur-lg p-10 shadow-2xl">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Welcome Back 👋
          </h1>

          <p className="text-gray-400 mt-2">
            Sign in to continue
          </p>
        </div>

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col gap-5"
        >

          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            type="email"
            placeholder="Enter your Email"
            className="w-full px-5 py-4 rounded-xl border border-gray-700 bg-slate-800 text-white placeholder:text-gray-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 transition-all"
          />

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            type="password"
            placeholder="Enter your Password"
            className="w-full px-5 py-4 rounded-xl border border-gray-700 bg-slate-800 text-white placeholder:text-gray-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 transition-all"
          />

          <button
            type="submit"
            className="w-full mt-2 rounded-xl bg-emerald-500 py-4 text-lg font-semibold text-white shadow-lg hover:bg-emerald-600 hover:shadow-emerald-500/30 active:scale-95 transition-all duration-300"
          >
            Log In
          </button>

        </form>
      </div>

    </div>
  );
};

export default Login;