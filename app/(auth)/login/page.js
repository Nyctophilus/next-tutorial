import { handleGitLogin } from "@/lib/actions";
import styles from "./login.module.css";
import LoginForm from "@/components/LoginForm/page";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGitLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>

        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
