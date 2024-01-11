import { handleGitLogin } from "@/lib/actions";
import styles from "./login.module.css";

const LoginPage = () => {
  return (
    <form action={handleGitLogin}>
      <button className={styles.github}>Login with Github</button>
    </form>
  );
};

export default LoginPage;
