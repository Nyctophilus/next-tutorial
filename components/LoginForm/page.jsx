"use client";

import { login } from "@/lib/actions";
import styles from "./LoginForm.module.css";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/");
  }, [state?.success, router]);

  return (
    <form action={formAction} className={styles.form}>
      <input type="text" name="username" placeholder="username" />
      <input type="password" name="password" placeholder="password" />
      <button type="submit">login with Credentials</button>

      {state?.error && (
        <p className="text-red-500 animate-bounce">{state.error}</p>
      )}

      <Link href={"/register"}>
        Don&apos;t have an account? <b>Register</b>
      </Link>
    </form>
  );
};
export default LoginForm;
