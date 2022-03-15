import styles from '../styling/LoginWidget.module.css';

function LoginWidget({ reg, setReg }) {
  return (
    <div className={styles.widget}>
      <header className={styles.header}>
        <h1>Welcome back to the hive</h1>
      </header>
      <form className={styles.form}>
        <div className={styles.formTextInput}>
          <label htmlFor="username"></label>
          <input
            id="username"
            placeholder="Username"
            type="text"
            name="enteredUsername"
            required
          />
        </div>
        <div className={styles.formTextInput}>
          <label htmlFor="password"></label>
          <input
            id="password"
            placeholder="Password"
            type="text"
            name="enteredPassword"
            required
          />
        </div>
        <div className={styles.extraInfo}>
          <p className= {styles.forgot}>Forgot Password?</p>
          <p className= {styles.incorrect}>Placeholder for incorrect username/password</p>
        </div>
        <div className={styles.submit}>
          <button className={styles.back} onClick={() => setReg(true)} ontype="button">Back</button>
          <input
          className={styles.submitButton}
          type="submit"
          name="submit"
          value="Login"
        />
        </div>
      </form>
    </div>
  );
}

export default LoginWidget;
