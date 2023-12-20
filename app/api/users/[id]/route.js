import { users } from "@/app/util/db";
import { NextResponse } from "next/server";
import fs from "fs";

// specific user
export async function GET(req, res) {
  const { id } = await res.params;

  const userIndex = users.findIndex((u) => u.id == id);
  if (userIndex === -1)
    return NextResponse.json(
      { error: `user with ID ${id} Not Found!!!` },
      { status: 404 }
    );

  return NextResponse.json(
    { success: `user with ID ${id} has been found!` },
    { status: 200 }
  );
}

// login
export async function POST(req, res) {
  const { id, name, password, email } = await req.json();

  if (!id || !name || !password || !email)
    return NextResponse.json(
      { error: "some required fields are missing!" },
      { status: 401 }
    );

  const {
    id: uID,
    name: uName,
    password: uPassword,
    email: uEmail,
  } = users.find((u) => u.id == id);

  if (
    id === uID &&
    name === uName &&
    password === uPassword &&
    email === uEmail
  )
    return NextResponse.json(
      {
        success: `${name} has been logged in successfully!`,
      },
      { status: 200 }
    );

  return NextResponse.json(
    { error: "Invalid credentials X_x" },
    { status: 501 }
  );
}

// delete user
export async function DELETE(_, res) {
  const { id } = await res.params;
  const uIndex = users.findIndex((u) => u.id == id);
  if (!users[uIndex])
    return NextResponse.json(
      { error: "User not Found" },
      { status: 404 }
    );

  users.splice(uIndex, 1);
  const updatedData = JSON.stringify(users, null, 2);
  fs.writeFileSync(
    "./app/util/db.js",
    `export const users = ${updatedData}`,
    "utf-8"
  );
  return NextResponse.json(
    { success: `User with ID ${id} has been deleted.` },
    { status: 200 }
  );
}
