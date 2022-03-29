import { React, useState } from "react";
import styles from "../styling/EditJob.module.css";
import Axios from "axios";

function EditJob({ setIsEditJobShowing, jobID }) {
  const [enteredJobName, setEnteredJobName] = useState("");
  const [enteredWage, setEnteredWage] = useState("");
  const [enteredHours, setEnteredHours] = useState("");
  const [enteredLocation, setEnteredLocation] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredContactNumber, setEnteredContactNumber] = useState("");
  const [enteredContactEmail, setEnteredContactEmail] = useState("");
  const [enteredApplicationLink, setEnteredApplicationLink] = useState("");
  const [enteredJobDescription, setEnteredJobDescription] = useState("");
  const [messageToShow, setMessageToShow] = useState("");

  const [messageToDisplay, setMessageToDisplay] = useState("");
  const editJob = async (e) => {
    e.preventDefault();

    const payload = {
      jobID: jobID,
      jobName: enteredJobName,
      wage: enteredWage,
      workingHours: enteredHours,
      location: enteredLocation,
      startDate: enteredDate,
      description: enteredJobDescription,
      employerEmail: enteredContactEmail,
      employerPhoneNumber: enteredContactNumber,
      link: enteredApplicationLink,
    };
    console.log(payload);
    try {
      const res = await Axios.post(
        process.env.REACT_APP_APIHOSTADDRESS + "/jobsSystem/editJobDetails",
        payload
      );
      if (res.data.status === "success") {
        setEnteredJobName("");
        setEnteredWage("");
        setEnteredHours("");
        setEnteredDate("");
        setEnteredContactNumber("");
        setEnteredContactEmail("");
        setEnteredApplicationLink("");
        setEnteredJobDescription("");

        console.log(res);
        setMessageToDisplay("Your job was successfully edited");
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
      <div className={styles.editJob}>
        <header className={styles.header}>
          <h1>Edit Job Details</h1>
        </header>
        <form className={styles.form}>
          <div className={styles.row0}>
            <div className={styles.formTextInput}>
              <label htmlFor="JobName">Job Name</label>
              <input
                type="text"
                name="enteredJobName"
                id="JobName"
                onChange={(e) => setEnteredJobName(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="wage">Wage</label>
            <input
              type="text"
              name="enteredWage"
              id="wage"
              onChange={(e) => setEnteredWage(e.target.value)}
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="hoursPerWeek">Working hours per week</label>
            <input
              type="text"
              name="enteredHours"
              id="hoursPerWeek"
              onChange={(e) => setEnteredHours(e.target.value)}
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="enteredLocation"
              id="location"
              onChange={(e) => setEnteredLocation(e.target.value)}
            />
          </div>
          <div className={styles.formDateInput}>
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              name="enteredDate"
              id="startDate"
              onChange={(e) => setEnteredDate(e.target.value)}
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="contactNo">Employer Contact Number</label>
            <input
              type="text"
              name="enteredContactNumber"
              id="contactNo"
              onChange={(e) => setEnteredContactNumber(e.target.value)}
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="contactEmail">Employer Contact Email</label>
            <input
              type="text"
              name="enteredContactEmail"
              id="contactEmail"
              onChange={(e) => setEnteredContactEmail(e.target.value)}
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="appLink">Application Link</label>
            <input
              type="text"
              name="enteredApplicationLink"
              id="appLink"
              onChange={(e) => setEnteredApplicationLink(e.target.value)}
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="JobDesc">Job Description and Requirements</label>
            <textarea
              name="enteredJobDescription"
              id="enteredDes"
              onChange={(e) => setEnteredJobDescription(e.target.value)}
            />
          </div>
          <div className={styles.submit}>
            <input
              type="submit"
              name="submit"
              value="Edit"
              onClick={(e) => editJob(e)}
            />
            <button onClick={() => setIsEditJobShowing(false)}>Cancel</button>
          </div>
        </form>
        <p>{messageToDisplay}</p>
      </div>
    </div>
  );
}

export default EditJob;
