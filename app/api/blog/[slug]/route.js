import { getPost } from "@/lib/data";
import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (_, res) => {
  const {
    params: { slug },
  } = res;

  //   try {
  //     connectToDb();

  //     const post = await Post.findOne({ slug });
  //     return NextResponse.json(post);
  //   } catch (error) {
  //     console.log("failed server");
  //     return NextResponse.json(error);
  //   }

  const post = await getPost(slug);
  return NextResponse.json(post);
};

export const DELETE = async (_, { params: { slug } }) => {
  try {
    connectToDb();

    await Post.deleteOne({ slug });
    return NextResponse.json("post deleted!");
  } catch (error) {
    console.log("deletion failed");
    return NextResponse.json(error);
  }
};
