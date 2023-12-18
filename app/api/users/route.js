import { NextResponse } from "next/server";

export async function POST(req, res) {
  let { username, password, email } = await req.json();

  console.log(username, password, email);

  if (!username || !password || !email)
    return NextResponse.json(
      {
        error: "required field not found!",
      },
      { status: 400 }
    );

  return NextResponse.json({
    res: "data sent successfully",
  });
}
