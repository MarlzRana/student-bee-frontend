import styles from '../styling/Navbar.module.css';

function Navbar() {
  return (
    <nav class={styles.navbar}>
      <div className={styles.leftSection}>
        <h1>StudentBee</h1>
      </div>
      <div className={styles.rightSection}>
        <ul>
          <li>
            <a href=''>Sign in</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
