import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";
import Image from "next/image";

// const getUser = async (userId) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: "no-store" }
//   );

//   if (!response.ok) throw new Error("Could not find user.");

//   return await response.json();
// };

const PostUser = async ({ userId }) => {
  const { username, img } = await getUser(userId);
  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={img ? img : "/noavatar.png"}
        alt={`${username} picture`}
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{username}</span>
      </div>
    </div>
  );
};

export default PostUser;
