import { MdMarkEmailRead } from "react-icons/md";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-section"]}>
        <p>Copyright © 2016-2018 Aceventura Services. All rights reserved.</p>
      </div>
      <div className={styles["footer-section"]}>
        <p>
          <a href="/terms-and-conditions">Terms and conditions</a>
        </p>
      </div>
      <div className={styles["footer-section"]}>
        <p>
          <a href="/contact-support">
            <MdMarkEmailRead
              style={{
                fontSize: "1.3em",
                color: "white",
                display: "inline",
                marginRight: "3px",
                marginLeft: "3px",
                verticalAlign: "middle",
                paddingTop: "2px",
                paddingBottom: "2px",
                paddingLeft: "3px",
                marginBottom: "3px",
              }}
            />
            Contact for app support
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
