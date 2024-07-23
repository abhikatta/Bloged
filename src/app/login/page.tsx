import styles from "./Login.module.css";
const Login = () => {
  return (
    <div className={styles.container}>
      <button>Login with Google</button>
      <button>Login with Github</button>
    </div>
  );
};

export default Login;
