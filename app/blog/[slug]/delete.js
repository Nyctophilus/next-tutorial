"use client";

import { revalidatePath } from "next/cache";
import { useRouter } from "next/router";

const Delete = (slug) => {
  const router = useRouter();

  const deletePost = async ({ slug }) => {
    console.log(slug);
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Could not find post");

    revalidatePath("/blog");
    router.back();
    return res.json();
  };

  return <button onClick={() => deletePost(slug)}>Delete</button>;
};
export default Delete;
