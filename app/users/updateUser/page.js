"use client";

import { useEffect, useState } from "react";

const Update = () => {
  const [user, setUser] = useState({});

  const updateUser = async () => {
    const res = await fetch("/api/users", {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        password: "mo22@ahlyXZ",
      }),
    });
    const data = await res.json();

    console.log(data);
  };

  useEffect(() => {
    updateUser();
  }, [user]);

  return (
    <section>
      <div className="mr-4 mt-6">
        <h1>name: {user.name}</h1>
        <h2>email: {user.email}</h2>
        <h2>password: {user.password}</h2>
        <br />
      </div>
    </section>
  );
};
export default Update;
