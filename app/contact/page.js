// "use client";
import Image from "next/image";
import styles from "./contact.module.css";
import contactImg from "@/public/contact.png";
// import dynamic from "next/dynamic";

// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const ContactPage = () => {
  return (
    <div className={`${styles.container} container`}>
      <div className={styles.imgContainer}>
        <Image
          src={contactImg}
          alt="Contact Image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.formContainer}>
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
