"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

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

export const handleGitLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const handleRegister = async (previousState, formData) => {
  const { username, email, img, password, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) return { error: "passwords do not match!" };

  try {
    connectToDb();
    const user = await User.findOne({ username });

    if (user) return { error: "username already found!" };

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      img,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("user saved to db");
    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "failed to register" };
  }
};

export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", {
      username,
      password,
    });
  } catch (err) {
    console.log(err);
    if (err.message.includes("credentialssignin"))
      return { error: "Invalid username or password" };

    throw err;
  }
};