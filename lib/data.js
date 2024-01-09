import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    connectToDb();

    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("failed to fetch posts");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();

    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error(`failed to fetch post of ID: ${slug}`);
  }
};

export const getUser = async (userId) => {
  noStore();
  try {
    connectToDb();

    const user = User.findById(userId);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error(`failed to fetch user of ID: ${userId}`);
  }
};

export const getUsers = async () => {
  try {
    connectToDb();

    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error(`failed to fetch users`);
  }
};
