import { NextResponse } from "next/server";
import { users } from "@/app/util/db";

export const GET = () => {
  return NextResponse.json({
    users,
  });
};
