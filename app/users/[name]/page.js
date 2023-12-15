"use client";

import { redirect } from "next/navigation";

const Users = ({ params }) => {
  if (params.name === "mo") redirect("/login");

  return (
    <div>
      <h1>{params.name}</h1>
    </div>
  );
};
export default Users;
