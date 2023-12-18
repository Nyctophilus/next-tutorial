"use client";

import { useState } from "react";

const CreateNewUser = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    let res = await fetch("api/users", {
      method: "POST",
      body: JSON.stringify(user),
    });

    res = await res.json();

    res.ok
      ? alert(`User created successfully!
	  Hello, ${user?.username}`)
      : console.log(
          new Error(
            "error accuared while posting user data"
          )
        );
  };

  return (
    <form method="POST" onSubmit={handleSignUp}>
      <input
        type="text"
        placeholder="Enter your name"
        className="bg-blue-200 m-4 block text-sm text-slate-500 hover:bg-yellow-400"
        value={user.username}
        name="username"
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Enter your email"
        className="bg-blue-200 m-4 block text-sm text-slate-500 hover:bg-yellow-400"
        value={user.email}
        name="email"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Enter your age"
        className="bg-blue-200 m-4 block text-sm text-slate-500 hover:bg-yellow-400"
        value={user.age}
        name="age"
        onChange={handleChange}
      />

      <button
        type="submit"
        className="ml-4 bg-red-200 p-4 hover:bg-yellow-400 rounded-xl"
      >
        Sign Up
      </button>
    </form>
  );
};
export default CreateNewUser;
