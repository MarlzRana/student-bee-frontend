import { useState } from "react";
import Axios from "axios";
import styles from "../styling/LoginWidget.module.css";
import { useNavigate, Link } from "react-router-dom";

function LoginWidget() {
  const routerNavigator = useNavigate();
  Axios.defaults.withCredentials = true;
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [messageToShow, setMessageToShow] = useState("");
  const login = async (e) => {
    e.preventDefault();
    const payload = {
      username: enteredUsername,
      password: enteredPassword,
    };
    try {
      const res = await Axios.post(
        process.env.REACT_APP_APIHOSTADDRESS + "/loginSystem/login",
        payload
      );
      if (res.data.status === "success") {
        setMessageToShow("You have successfully logged in!");
        routerNavigator("/mainApp/home");
      }
      if (res.data.status === "failure") {
        if (res.data.reason === "invalidCredentials") {
          setMessageToShow("Invalid credentials!");
        } else if (res.data.reason === "invalidInputFormat") {
          const validationCheckDetails = res.data.validationCheckDetails;
          if (!validationCheckDetails.username) {
            setMessageToShow(
              "Your username must be at least 4 characters long and only contain letters and numbers"
            );
          } else if (!validationCheckDetails.password) {
            setMessageToShow(
              "Your password must be at least 8 characters long"
            );
          }
        }
      }
    } catch (error) {
      window.confirm("Something went wrong. Please try again later.");
    }
  };
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
            onChange={(e) => setEnteredUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.formTextInput}>
          <label htmlFor="password"></label>
          <input
            id="password"
            placeholder="Password"
            type="password"
            name="enteredPassword"
            onChange={(e) => setEnteredPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.extraInfo}>
          <p className={styles.forgot}>Forgot Password?</p>
          <p className={styles.incorrect}>{messageToShow}</p>
        </div>
        <div className={styles.submit}>
          <Link to="/loginSystem/register" className={styles.back}>
            Not signed up?
          </Link>
          <input
            className={styles.submitButton}
            type="submit"
            name="submit"
            value="Login"
            onClick={(e) => login(e)}
          />
        </div>
      </form>
    </div>
  );
}

export default LoginWidget;
