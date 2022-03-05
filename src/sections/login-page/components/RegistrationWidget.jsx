import styles from '../styling/RegistrationWidget.module.css';

import { useState } from 'react';
import Axios from 'axios';

function RegistrationWidget() {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const register = async (e) => {
    e.preventDefault();
    const payload = { username: enteredUsername, password: enteredPassword };
    await Axios.post('http://localhost:3001/register', payload)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className={styles.widget}>
      <header className={styles.header}>
        <h1>Join the hive!</h1>
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
        <div className={styles.formTextInput}>
          <label htmlFor='firstName'>First name:</label>
          <input id='firstName' type='text' name='enteredFirstName' required />
        </div>
        <div className={styles.formTextInput}>
          <label htmlFor='lastName'>Last name:</label>
          <input id='lastName' type='text' name='enteredLastName' required />
        </div>
        <div className={styles.formTextInput}>
          <label htmlFor='email'>Email:</label>
          <input id='email' type='email' name='enteredPassword' required />
        </div>
        <div className={styles.formDateInput}>
          <label htmlFor='dob'>Date of birth: </label>
          <input id='dob' type='date' name='enteredDOB' />
        </div>
        <input
          className={styles.submit}
          type='submit'
          name='submit'
          value='Sign up'
          onClick={register}
        />
      </form>
    </div>
  );
}

export default RegistrationWidget;
