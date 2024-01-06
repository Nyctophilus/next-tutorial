import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src={"/hero.gif"} alt="" fill className={styles.img} />
        </div>

        <span className={styles.date}>22.11.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>hello</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dolorum.
        </p>
        <Link className={styles.link} href={`/blog/post`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
