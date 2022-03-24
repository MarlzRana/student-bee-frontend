import { React, useState } from "react";
import Axios from "axios";
import styles from "../styling/AddSocietyWidget.module.css";

function AddSocietyWidget({ setIsAddSocietyWidgetShowing }) {
  const [enteredSocietyName, setEnteredSocietyName] = useState("");
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredLeaderName, setEnteredLeaderName] = useState("");
  const [enteredLink, setEnteredLink] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const addSociety = async (e) => {
    e.preventDefault();
    const payload = {
      societyNameIn: enteredSocietyName,
      usernameIn: enteredUsername,
      societyLeaderNameIn: enteredLeaderName,
      societyMainSocialLinkIn: enteredLink,
      societyDescriptionIn: enteredDescription,
    };
    console.log(payload);
    try {
      const res = await Axios.post(
        process.env.REACT_APP_APIHOSTADDRESS + "/societiesSystem/add",
        payload
      );
      if (res.data.status === "success") {
        console.log(res);
        console.log("success");
      }
      if (res.data.status === "failure") {
        console.log(res);
        console.log("failure");
      }
    } catch (error) {
      window.confirm("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.addEventsWidget}>
        <header className={styles.header}>
          <h1>Society Details</h1>
        </header>
        <form className={styles.form}>
          <div className={styles.row0}>
            <div className={styles.formTextInput}>
              <input
                type="text"
                placeholder="Society Name"
                name="enteredSocietyName"
                id="SocietyName"
                onChange={(e) => setEnteredSocietyName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className={styles.formTextInput}>
            <input
              type="text"
              placeholder="Username (Society Leader)"
              name="enteredUsername"
              id="enteredLeaderName"
              onChange={(e) => setEnteredUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.formTextInput}>
            <input
              type="text"
              placeholder="Name (Society Leader)"
              name="enteredLeaderName"
              id="enteredLeaderName"
              onChange={(e) => setEnteredLeaderName(e.target.value)}
              required
            />
          </div>
          <div className={styles.formTextInput}>
            <input
              type="text"
              placeholder="Link (Discord, Instagram, etc)"
              name="enteredLink"
              id="enteredLink"
              onChange={(e) => setEnteredLink(e.target.value)}
              required
            />
          </div>
          <div className={styles.formTextInput}>
            <textarea
              placeholder="Society Description"
              name="enteredDescription"
              id="enteredDescription"
              onChange={(e) => setEnteredDescription(e.target.value)}
              required
            />
          </div>
          <div className={styles.submit}>
            <input
              type="submit"
              name="submit"
              value="Add"
              onClick={(e) => addSociety(e)}
            />
            <button onClick={() => setIsAddSocietyWidgetShowing(false)}>
              Cancel
            </button>
          </div>
        </form>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default AddSocietyWidget;
