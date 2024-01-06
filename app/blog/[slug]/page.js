import styles from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  console.log(slug);

  return (
    <div className={`${styles.container} container`}>
      <div className={styles.imgContainer}>
        <Image src={"/hero.gif"} alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          {/* <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={1} />
          </Suspense> */}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>22.11.2024</span>
          </div>
        </div>
        <div className={styles.content}>Desc</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
