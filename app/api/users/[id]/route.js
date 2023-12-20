import { users } from "@/app/util/db";
import { NextResponse } from "next/server";
import fs from "fs";

// 2. get specific user
export async function GET(_, res) {
  const { id } = await res.params;

  const user = users.filter((user) => user.id === id);
  console.log(user);

  if (!user.length)
    return NextResponse.json(
      {
        error: "user not found!",
      },
      {
        status: 404,
      }
    );

  return NextResponse.json(user, { status: 200 });
}

// 3. Login
export async function POST(req, res) {
  const { name, password, email } = await req.json();

  const { id } = await res.params;

  const {
    name: uName,
    password: uPassword,
    email: Uemail,
  } = users.find((u) => u.id === id);

  if (
    name === uName &&
    password === uPassword &&
    email === Uemail
  )
    return NextResponse.json(
      { message: `${name} logged successfully!` },
      { status: 200 }
    );
  else if (!name || !password || !email)
    return NextResponse.json(
      { error: `required field is missing!` },
      { status: 404 }
    );
  else
    return NextResponse.json(
      { error: `invalid credentials` },
      { status: 501 }
    );
}

// 6. Delete user
export async function DELETE(req, res) {
  const { id } = res.params;

  const userIndex = users.findIndex((u) => u.id == id);
  if (userIndex === -1)
    return NextResponse.json(
      { error: "user not found" },
      { status: 404 }
    );

  const updatedUsers = users.filter((u) => u.id != id);
  const updatedData = JSON.stringify(updatedUsers, null, 2);
  fs.writeFileSync(
    "./app/util/db.js",
    `export const users = ${updatedData}`,
    "utf-8"
  );

  return NextResponse.json(
    { message: `user has been deleted!!!` },
    {
      status: 200,
    }
  );
}
