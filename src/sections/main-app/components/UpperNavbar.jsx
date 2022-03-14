import styles from '../styling/UpperNavbar.module.css';
function UpperNavbar() {
  return (
    <div>
      <nav className={styles.mainNavbar}>
        <div className={styles.leftSection}>
          <h1>StudentBee</h1>
        </div>
        <div className={styles.rightSection}>
          <a href='#logOut'>Log Out</a>
        </div>
      </nav>
    </div>
  );
}

export default UpperNavbar;
