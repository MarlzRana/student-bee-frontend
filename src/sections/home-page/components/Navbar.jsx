import styles from '../styling/Navbar.module.css';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class={styles.navbar}>
      <div className={styles.leftSection}>
        <h1>StudentBee</h1>
      </div>
      <div className={styles.rightSection}>
        <ul>
          <li>
            <Link to='/login'>Sign in</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
