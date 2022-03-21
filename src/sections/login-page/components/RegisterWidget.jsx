import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styling/RegisterWidget.module.css';
import Axios from 'axios';

function RegisterWidget() {
  const [enteredFirstName, setEnteredFirstName] = useState('');
  const [enteredLastName, setEnteredLastName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmedPassword] = useState('');
  const [enteredDateOfBirth, setEnteredDateOfBirth] = useState('');
  const [messageToShow, setMessageToShow] = useState('');
  const register = async (e) => {
    e.preventDefault();
    const payload = {
      username: enteredUsername,
      password: enteredPassword,
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      dob: enteredDateOfBirth,
    };
    const passwordMatch = enteredPassword === enteredConfirmPassword;
    if (passwordMatch) {
      try {
        const res = await Axios.post(
          process.env.REACT_APP_APIHOSTADDRESS + '/loginSystem/register',
          payload
        );
        console.log(res);
        if (res.data.status === 'success') {
          setMessageToShow("You've successfully registered!");
        }
        if (res.data.status === 'failure') {
          if (res.data.reason === 'usernameIsTaken') {
            setMessageToShow('That username is already taken!');
          }
          if (res.data.reason === 'invalidInputFormat') {
            const validationCheckDetails = res.data.validationCheckDetails;
            console.log(validationCheckDetails);
            if (!validationCheckDetails.username) {
              setMessageToShow(
                'Your username must be between 4 and 25 characters and only contain letters and numbers'
              );
            } else if (!validationCheckDetails.password) {
              setMessageToShow(
                'Your password must be between 8 and 50 characters long'
              );
            } else if (!validationCheckDetails.firstName) {
              setMessageToShow(
                'Your first name should be between 2 and 25 letters long and only contain letters and hyphens'
              );
            } else if (!validationCheckDetails.lastName) {
              setMessageToShow(
                'Your last name should be between 2 and 25 letters long and only contain letters and and hyphens'
              );
            } else if (!validationCheckDetails.email) {
              setMessageToShow('Your email is invalid');
            } else if (!validationCheckDetails.dob) {
              setMessageToShow(
                'Date of birth invalid, must be in the format DD-MM-YYYY'
              );
            }
          }
        }
      } catch (error) {
        console.log(error);
        window.confirm('Something went wrong. Please try again later.');
      }
    } else {
      setMessageToShow('Your passwords do not match');
    }
  };
  return (
    <div className={styles.registerWidget}>
      <header className={styles.header}>
        <h1>Join the hive</h1>
      </header>
      <form className={styles.form}>
        <div className={styles.row0}>
          <div className={styles.formTextInput}>
            <input
              type='text'
              placeholder='First Name'
              name='FirstName'
              id='FirstName'
              onChange={(e) => setEnteredFirstName(e.target.value)}
              required
            />
          </div>
          <div className={styles.horizontalSpacer}></div>
          <div className={styles.formTextInput}>
            <input
              type='text'
              placeholder='Last Name'
              name='LastName'
              id='LastName'
              onChange={(e) => setEnteredLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className={styles.formTextInput}>
          <input
            type='text'
            placeholder='Email'
            name='email'
            id='email'
            onChange={(e) => setEnteredEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formTextInput}>
          <input
            type='text'
            placeholder='Username'
            name='username'
            id='username'
            onChange={(e) => setEnteredUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.formTextInput}>
          <input
            type='password'
            placeholder='Password'
            name='psw'
            id='psw'
            onChange={(e) => setEnteredPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.formTextInput}>
          <input
            type='password'
            placeholder='Confirm Password'
            name='psw-confirm'
            id='psw-confirm'
            onChange={(e) => setEnteredConfirmedPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.formDateInput}>
          <label htmlFor='dob'>Date of Birth:</label>
          <input
            type='date'
            name='dob'
            id='dob'
            onChange={(e) => setEnteredDateOfBirth(e.target.value)}
            required
          />
        </div>
        <div className={styles.errorMessage}>
          <p>{messageToShow}</p>
        </div>
        <div className={styles.submit}>
          <input
            type='submit'
            name='submit'
            value='Register'
            onClick={(e) => register(e)}
          />
          <Link to='/loginSystem/login'>Already have an account?</Link>
        </div>
      </form>
    </div>
  );
}

export default RegisterWidget;
