"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();

    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
  } catch (error) {
    console.log("failed to add Post");
    throw error;
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("post deleted successfully");
    revalidatePath("/blog");
  } catch (error) {
    console.log("deletion isnt complete. failed!");
    throw error;
  }
};
