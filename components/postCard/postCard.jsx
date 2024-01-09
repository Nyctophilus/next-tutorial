import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post: { id, title, slug, desc, img, createdAt } }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          {img && <Image src={img} alt={title} fill className={styles.img} />}
        </div>

        <span className={styles.date}>{createdAt.toString().slice(4, 16)}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>{desc}</p>
        <Link className={styles.link} href={`/blog/${slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
