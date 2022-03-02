import styles from '../styling/LoginWidget.module.css';

import { useState } from 'react';
import Axios from 'axios';

function LoginWidget() {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasTriedToLogin, setHasTriedToLogin] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    const payload = { username: enteredUsername, password: enteredPassword };
    await Axios.post('http://localhost:3001/login', payload)
      .then((res) => {
        setHasTriedToLogin(true);
        if (res.data.status == 'validCredentials') setIsLoggedIn(true);
        if (res.data.status == 'invalidCredentials') setIsLoggedIn(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.widget}>
      <header className={styles.header}>
        <h1>Welcome back!</h1>
      </header>
      <form className={styles.form}>
        <div className={styles.formTextInput}>
          <label htmlFor='username'>Username:</label>
          <input
            id='username'
            type='text'
            name='enteredUsername'
            required
            onChange={(e) => setEnteredUsername(e.target.value)}
          />
        </div>
        <div className={styles.formTextInput}>
          <label htmlFor='password'>Password:</label>
          <input
            id='password'
            type='text'
            name='enteredPassword'
            required
            onChange={(e) => setEnteredPassword(e.target.value)}
          />
        </div>
        <input
          className={styles.submit}
          type='submit'
          name='submit'
          value='Log in'
          onClick={login}
        />
      </form>
      <p>{isLoggedIn && 'Welcome back!'}</p>
      <p>{!isLoggedIn && hasTriedToLogin && 'Incorrect username/password'}</p>
    </div>
  );
}

export default LoginWidget;
