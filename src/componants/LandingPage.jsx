import LoginForm from "./LoginForm";
import styles from "../CSS/LoginParent.module.css";
import { Notification } from "./Notification";

const LandingPage = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginContainerChild}>
        <LoginForm />
        <Notification />
      </div>
    </div>
  );
};

export default LandingPage;
