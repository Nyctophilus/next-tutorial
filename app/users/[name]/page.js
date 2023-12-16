"use client";

import Image from "next/image";
import PharaohImage from "@/public/ideogram.jpeg";
import { redirect } from "next/navigation";

const Users = ({ params }) => {
  if (params.name === "mo") redirect("/login");
  if (params.name === "cupcake")
    return (
      <Image
        src="https://images.unsplash.com/photo-1702234867439-bec43ed4e369?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="my cupcake photo"
        width={500}
        height={500}
      />
    );
  if (params.name === "fayad")
    return (
      <Image
        src={PharaohImage}
        alt="fayad pharaoh image"
        width={500}
        height={500}
      />
    );

  return (
    <div>
      <h1>{params.name}</h1>
    </div>
  );
};
export default Users;
