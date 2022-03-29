import { React, useState } from "react";
import styles from "../styling/EditSociety.module.css";
import Axios from "axios";

function EditSociety({ setIsEditSocietyShowing, societyID }) {
  const [enteredSocietyName, setEnteredSocietyName] = useState("");
  const [enteredLeaderName, setEnteredLeaderName] = useState("");
  const [enteredLink, setEnteredLink] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [messageToDisplay, setMessageToDisplay] = useState("");
  const editSociety = async (e) => {
    e.preventDefault();

    const payload = {
      societyID: societyID,
      societyNameIn: enteredSocietyName,
      societyLeaderNameIn: enteredLeaderName,
      societyMainSocialLinkIn: enteredLink,
      societyDescriptionIn: enteredDescription,
    };
    console.log(payload);
    try {
      const res = await Axios.post(
        process.env.REACT_APP_APIHOSTADDRESS +
          "/societiesSystem/editSocietyDetails",
        payload
      );
      if (res.data.status === "success") {
        setEnteredSocietyName("");
        setEnteredDescription("");
        setEnteredLeaderName("");
        setEnteredLink("");

        console.log(res);
        setMessageToDisplay("Your society was successfully edited");
        console.log("success");
      }
      if (res.data.status === "failure") {
        console.log(res);
        if (res.data.reason === "invalidInputFormat") {
          if (!res.data.validationCheckDetails.societyLeaderNameIn) {
            setMessageToDisplay("Please provide a name for the society leader");
          } else if (!res.data.validationCheckDetails.societyNameIn) {
            setMessageToDisplay("Please provide a name for the society");
          } else if (!res.data.validationCheckDetails.societyMainSocialLinkIn) {
            setMessageToDisplay(
              "Please provide a link or email for your society"
            );
          }
        }
        console.log("failure");
      }
    } catch (error) {
      window.confirm("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.editSociety}>
        <header className={styles.header}>
          <h1>Edit Society Details</h1>
        </header>
        <form className={styles.form}>
          <div className={styles.row0}>
            <div className={styles.formTextInput}>
              <label htmlFor="SocietyName">Society Name</label>
              <input
                type="text"
                name="enteredSocietyName"
                id="SocietyName"
                onChange={(e) => setEnteredSocietyName(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="enteredLeaderName">Name (Society Leader)</label>
            <input
              type="text"
              name="enteredLeaderName"
              id="enteredLeaderName"
              onChange={(e) => setEnteredLeaderName(e.target.value)}
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="enteredLink">Link</label>
            <input
              type="text"
              name="enteredLink"
              id="enteredLink"
              onChange={(e) => setEnteredLink(e.target.value)}
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="enteredDescription">Society Description</label>
            <textarea
              name="enteredDescription"
              id="enteredDescription"
              onChange={(e) => setEnteredDescription(e.target.value)}
            />
          </div>
          <div className={styles.submit}>
            <input
              type="submit"
              name="submit"
              value="Edit"
              onClick={(e) => editSociety(e)}
            />
            <button onClick={() => setIsEditSocietyShowing(false)}>
              Cancel
            </button>
          </div>
        </form>
        <p>{messageToDisplay}</p>
      </div>
    </div>
  );
}

export default EditSociety;
