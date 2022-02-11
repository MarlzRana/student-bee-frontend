import styles from '../styling/LoginWidget.module.css';

function LoginWidget() {
  return (
    <div class={styles.widget}>
      <header class={styles.header}>
        <h1>Welcome back!</h1>
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

export default LoginWidget;
