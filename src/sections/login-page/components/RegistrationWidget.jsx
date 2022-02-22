import styles from '../styling/RegistrationWidget.module.css';

function RegistrationWidget() {
  return (
    <div class={styles.widget}>
      <header class={styles.header}>
        <h1>Join the hive!</h1>
      </header>
      <form class={styles.form}>
        <div className={styles.formTextInput}>
          <label for='username'>Username:</label>
          <input id='username' type='text' name='enteredUsername' required />
        </div>
        <div className={styles.formTextInput}>
          <label for='password'>Password:</label>
          <input id='password' type='text' name='enteredPassword' required />
        </div>
        <div className={styles.formTextInput}>
          <label for='firstName'>First name:</label>
          <input id='firstName' type='text' name='enteredFirstName' required />
        </div>
        <div className={styles.formTextInput}>
          <label for='lastName'>Last name:</label>
          <input id='lastName' type='text' name='enteredLastName' required />
        </div>
        <div className={styles.formDateInput}>
          <label for='dob'>Date of birth: </label>
          <input id='dob' type='date' name='enteredDOB' />
        </div>
        <input
          class={styles.submit}
          type='submit'
          name='submit'
          value='Login'
        />
      </form>
    </div>
  );
}

export default RegistrationWidget;
