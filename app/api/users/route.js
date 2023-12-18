import { NextResponse } from "next/server";

export async function POST(req, res) {
  const { username, email, age } = await req.json();

  console.log({ username, email, age });

  if (!username || !email || !age)
    return NextResponse.json(
      {
        message: "one of the required fields is missing!",
        ok: false,
      },
      {
        status: 400,
      }
    );

  return NextResponse.json(
    {
      message: "data received successfully!",
      ok: true,
    },
    {
      status: 201,
    }
  );
}
