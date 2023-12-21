import { users } from "@/app/util/db";
import { NextResponse } from "next/server";
import fs from "fs";

// get all users
export async function GET(req, res) {
  const data = users;

  return NextResponse.json({ data }, { status: 200 });
}

// create user
export async function POST(req, res) {
  const { id, name, email, password, age } =
    await req.json();

  if (!id || !name || !password || !email)
    return NextResponse.json(
      { error: "some required fields are missing!" },
      { status: 401 }
    );

  const idIndex = users.findIndex((u) => u.id === id);
  const nameIndex = users.findIndex((u) => u.name === name);
  const emailIndex = users.findIndex(
    (u) => u.email === email
  );
  if (
    idIndex !== -1 ||
    nameIndex !== -1 ||
    emailIndex !== -1
  )
    return NextResponse.json(
      {
        error: `error`,
      },
      {
        status: 501,
        statusText: `user with id:${id} ,or name: ${name} or email: ${email} already signed up`,
      }
    );

  users.push({ id, name, email, password, age });
  const updatedDB = users;
  const updatedData = JSON.stringify(updatedDB, null, 2);

  fs.writeFileSync(
    "./app/util/db.js",
    `export const users = ${updatedData}`,
    "utf-8"
  );

  return NextResponse.json(
    {
      success: `user with name:${name} has been created successfully!`,
    },
    { status: 201 }
  );
}

// update user
export async function PUT(req, res) {
  const { id, name, email, password } = await req.json();

  const uIndex = users.findIndex((u) => u.id == id);

  if (uIndex === -1)
    return NextResponse.json(
      { error: "user not found" },
      { status: 404 }
    );

  users[uIndex] = {
    ...users[uIndex],
    name: name || users[uIndex].name,
    email: email || users[uIndex].email,
    password: password ? password : users[uIndex].password,
  };

  const updatedData = JSON.stringify(users, null, 2);
  fs.writeFileSync(
    "./app/util/db.js",
    `export const users = ${updatedData}`,
    "utf-8"
  );
  return NextResponse.json(
    { success: "user updated the info successfully!" },
    { status: 200 }
  );
}
