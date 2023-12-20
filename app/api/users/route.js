import { users } from "@/app/util/db";
import { NextResponse } from "next/server";
import fs from "fs";

// 1. get all user
export function GET() {
  const data = users;

  return NextResponse.json(
    {
      data,
    },
    {
      status: 200,
    }
  );
}

// 4. create user
export async function POST(req, res) {
  const { id, name, password, email } = await req.json();
  if (!id || !name || !password || !email) {
    return NextResponse.json(
      {
        message: "Please fill out the required fields.",
      },
      {
        status: 404,
      }
    );
  } else {
    // check duplicate ID
    if (users.find((user) => user.id === parseInt(id))) {
      return NextResponse.json(
        {
          message: `User with ID ${id} already exists.`,
        },
        {
          status: 503,
        }
      );
    } else {
      const newUser = {
        id: parseInt(id),
        name,
        password,
        email,
      };
      users.push(newUser);

      const updatedArray = users;
      const updatedData = JSON.stringify(
        updatedArray,
        null,
        2
      );
      fs.writeFileSync(
        "./app/util/db.js",
        `export const users = ${updatedData}`,
        "utf-8"
      );

      return NextResponse.json(
        { message: "user created successfully!" },
        { status: 201 }
      );
    }
  }
}

// 5. Update user
export async function PUT(req, res) {
  let { id, name, password, email } = await req.json();

  const userIndex = users.findIndex(
    (u) => parseInt(u.id) === parseInt(id)
  );

  if (userIndex === -1)
    return NextResponse.json(
      { error: "User not found" },
      { status: 404 }
    );

  if (name) users[userIndex].name = name;
  if (password) users[userIndex].password = password;
  if (email) users[userIndex].email = email;

  const updatedArray = users;
  const updatedData = JSON.stringify(updatedArray, null, 2);
  fs.writeFileSync(
    "./app/util/db.js",
    `export const users = ${updatedData}`,
    "utf-8"
  );

  return NextResponse.json(
    { sucess: "user info updated successfully!" },
    {
      status: 200,
    }
  );
}
