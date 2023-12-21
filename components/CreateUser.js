import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultU = {
  id: "",
  name: "",
  email: "",
  password: "",
  age: "",
};

const CreateUser = () => {
  const [user, setUser] = useState(defaultU);
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  const notify = (msg) => toast(msg);

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !user.id ||
      !user.name ||
      !user.email ||
      !user.password
    ) {
      notify("required credentials are missing!!");
      return;
    }

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      if (res.ok) {
        const data = await res.json();
        setError({
          isError: false,
          message: "user created successfully",
        });
        console.log("data", data.success);
      } else {
        console.log(`error: ${res.statusText}`);
        setError({
          isError: true,
          message: res.statusText,
        });
        notify(res.statusText);
      }
    } catch (error) {
      console.log(error);
    }

    clearForm();
  };

  const clearForm = () => setUser(defaultU);

  return (
    <>
      <form
        method="POST"
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <Input
          className="mt-2"
          label="Id"
          type="text"
          name="id"
          placeholder="Enter your Id"
          value={user.id}
          onChange={handleChange}
        />
        <Input
          className="mt-2"
          label="Name"
          type="text"
          name="name"
          placeholder="Enter your Name"
          value={user.name}
          onChange={handleChange}
        />
        <Input
          className="mt-2"
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your Password"
          value={user.password}
          onChange={handleChange}
        />
        <Input
          className="mt-2"
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={user.email}
          onChange={handleChange}
        />
        <Input
          label="Age"
          type="number"
          name="age"
          placeholder="Enter your Age"
          value={user.age}
          onChange={handleChange}
        />

        <Button type="submit">Create</Button>
      </form>
      {error.isError && (
        <p className="text-center text-amber-900">
          Error: {error.message}
        </p>
      )}
      {!error.isError && error.message && (
        <p className="text-center text-light-green-700">
          {error.message}
        </p>
      )}

      <ToastContainer theme="dark" />
    </>
  );
};
export default CreateUser;
