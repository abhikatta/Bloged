import { redirect } from "next/navigation";
import { auth, signIn } from "../../../auth";
import styles from "./Login.module.css";

const Login = async () => {
  const user = (await auth())?.user;
  if (user) {
    redirect("/");
  }

  return (
    <div className={styles.container}>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}>
        <button type="submit">Login with Google</button>
      </form>
    </div>
  );
};

export default Login;
