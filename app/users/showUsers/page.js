"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const ShowUsers = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const data = await fetch("/api/users");
    const uData = await data.json();
    setUsers(uData.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <section>
      {users.map(({ id, name, email, password }) => (
        <div className="mr-4 mt-6" key={id}>
          <h1>name: {name}</h1>
          <h2>email: {email}</h2>
          <h2>password: {password}</h2>
          <Link className="border" href="/users/updateUser">
            Update info
          </Link>
          <br />
        </div>
      ))}
    </section>
  );
};
export default ShowUsers;
