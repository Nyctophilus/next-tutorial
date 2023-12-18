import { NextResponse } from "next/server";

export const GET = (_, res) => {
  return NextResponse.json({
    id: res.params.id,
  });
};
