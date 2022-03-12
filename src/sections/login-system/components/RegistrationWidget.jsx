import styles from '../styling/RegistrationWidget.module.css';

import { useState } from 'react';
import Axios from 'axios';

function RegistrationWidget() {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const [wasRegistrationSuccessful, setWasRegistrationSuccessful] =
    useState(false);
  const [hasTriedToRegister, setHasTriedToRegister] = useState(false);
  const [registrationMessage, setRegistrationMessage] = useState('');
  const register = async (e) => {
    e.preventDefault();
    setHasTriedToRegister(true);
    const payload = { username: enteredUsername, password: enteredPassword };
    const res = await Axios.post('http://localhost:3001/register', payload);
    console.log(res.data.status);
    if (res.data.status === 'success') {
      setWasRegistrationSuccessful(true);
      setRegistrationMessage('Your account was successfully made!');
    }
    if (res.data.status === 'usernameIsTaken') {
      setWasRegistrationSuccessful(false);
      setRegistrationMessage(
        'A user with that username already exists try another username'
      );
    }
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
        <p>{registrationMessage}</p>
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
