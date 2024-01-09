import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     cache: "no-store",
//   });

//   if (!res.ok) throw new Error("something went wrong!");

//   return res.json();
// };

export const metadata = {
  title: "Blogs",
  description:
    "A blog about web development, programming and other tech related topics.",
};

const BlogPage = async () => {
  const posts = await getPosts();

  console.log(posts);

  return (
    <div className={`${styles.container} container`}>
      {posts &&
        posts.map((post) => (
          <div key={post.id} className={styles.post}>
            <PostCard post={post} />
          </div>
        ))}
    </div>
  );
};

export default BlogPage;
