import styles from '../styling/UpperNavbar.module.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function UpperNavbar() {
  const logoutUser = async () => {
    await Axios.get(
      process.env.REACT_APP_APIHOSTADDRESS + '/loginSystem/logout'
    );
  };
  return (
    <div>
      <nav className={styles.mainNavbar}>
        <div className={styles.leftSection}>
          <h1>StudentBee</h1>
          <i className={styles.mainLogo}></i>
        </div>
        <div className={styles.rightSection}>
          <Link to='/' onClick={logoutUser}>
            Log Out
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default UpperNavbar;
