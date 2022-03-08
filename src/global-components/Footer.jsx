import styles from "./Footer.module.css";
// import mainLogo from "../public/images/main_logo.png"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSpacing}></div>
      <div className={styles.footerTop}>
        <div className={styles.footerLeft}>
          <h1>Student Bee </h1>
          {/* <img src = {mainLogo} alt = "logo"></img>  */}
          <p>Reconnecting Students</p>
        </div>
        <div className={styles.footerMiddle}>
          <h2>About Us</h2>
          <p>Our aim is to reconnect student ...</p>
        </div>
        <div className={styles.footerRight}>
          <h3>Contact Information</h3>
          <ul>
            <li>Email: studentbee@outlook.com </li>
            <li>Phone Number: 01920 870 741</li>
            <li>Address: Cloud Industries, United Cloud</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerMargin}></div>
      <div className={styles.footerBottom}>
        <p>StudentBee &copy; 2022</p>
      </div>
    </footer>
  );
}

export default Footer;
