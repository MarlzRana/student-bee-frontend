import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div classNames={styles.footerMain}>
        <Link to='/login'>Sign in</Link>
        <Link to='/#'>Accommodation</Link>
      </div>
      <div class='footer-bottom'>StudentBee &copy; 2022</div>
    </footer>
  );
}

export default Footer;
