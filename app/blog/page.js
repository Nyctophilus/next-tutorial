import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// with API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error("something went wrong!");

  return res.json();
};

export const metadata = {
  title: "Blogs",
  description:
    "A blog about web development, programming and other tech related topics.",
};

const BlogPage = async () => {
  // server actions without API
  // const posts = await getPosts();

  // fetch with API
  const posts = await getData();

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
