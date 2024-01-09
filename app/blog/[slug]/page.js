import styles from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";

// const getSinglePost = async (slug) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${slug}`,
//     {
//       next: { revalidate: 3600 },
//     }
//   );

//   if (!res.ok) throw new Error("Could not find post");

//   return res.json();
// };

export const generateMetadata = async ({ params: { slug } }) => {
  const { title, desc } = await getPost(slug);

  return {
    title: `Blog | ${title}`,
    description: desc,
  };
};

const SinglePostPage = async ({ params: { slug } }) => {
  const { title, desc, img, userId, createdAt } = await getPost(slug);

  return (
    <div className={`${styles.container} container`}>
      <div className={styles.imgContainer}>
        {img && <Image src={img} alt={title} fill className={styles.img} />}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.detail}>
          <PostUser userId={userId} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
