import { Link } from 'react-router-dom';

import styles from './Footer.module.css';
// import mainLogo from "../public/images/main_logo.png"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerLeft}>
          <h1>Student Bee </h1>
          {/* <img src = {mainLogo} alt = "logo"></img>  */}
          <p>Reconnecting Students</p>
        </div>
        <div className= {styles.footerMiddle}>
            <h2>About Us</h2>
            <p>Our aim is to reconnect student ...</p>
        </div>
        <div className={styles.footerRight}>
          <h3>Contact Information</h3>
          <ul>
            <li>Email: ... </li>
            <li>Phone Number: ..</li>
            <li>Address: ...</li>
          </ul>
        </div>
      </div> 
      <div className={styles.footerMargin}>
      </div>
      <div className={styles.footerBottom}>
            <p>StudentBee &copy; 2022</p> 
            <Link to='/#'>Terms and Conditions</Link>
      </div>   
    </footer>
  );
}

export default Footer;
