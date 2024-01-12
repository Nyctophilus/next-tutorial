import styles from "./register.module.css";
import RegisterForm from "@/components/registerForm/page";

const RegisterPage = () => {
  return (
    <div className={styles.wrapper}>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
