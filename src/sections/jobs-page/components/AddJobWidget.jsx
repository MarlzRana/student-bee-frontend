import { React, useState } from "react";
import styles from "../styling/AddJobWidget.module.css";
import Axios from "axios";

function AddJobWidget({ setIsAddJobWidgetShowing }) {
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

  const addJob = async (e) => {
    e.preventDefault();
    const payload = {
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
    try {
      const res = await Axios.post(
        process.env.REACT_APP_APIHOSTADDRESS + "/jobsSystem/addJob",
        payload
      );
      if (res.data.status === "success") {
        setMessageToShow("Success! Your job has been added");
        setEnteredJobName("");
        setEnteredWage("");
        setEnteredHours("");
        setEnteredDate("");
        setEnteredContactNumber("");
        setEnteredContactEmail("");
        setEnteredApplicationLink("");
        setEnteredJobDescription("");
      }
      if (res.data.status === "failure") {
        if (res.data.reason === "invalidInputFormat") {
          setMessageToShow("Invalid inputs");
        }
      }
    } catch (error) {
      window.confirm("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.addJobWidget}>
        <header className={styles.header}>
          <h1>Job Details</h1>
        </header>
        <form className={styles.form}>
          <div className={styles.row0}>
            <div className={styles.formTextInput}>
              <input
                type="text"
                placeholder="Job Name"
                name="enteredJobName"
                id="JobName"
                onChange={(e) => setEnteredJobName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className={styles.formTextInput}>
            <input
              type="text"
              placeholder="Wage"
              name="enteredWage"
              id="wage"
              onChange={(e) => setEnteredWage(e.target.value)}
              required
            />
          </div>
          <div className={styles.formTextInput}>
            <input
              type="text"
              placeholder="Working hours per week"
              name="enteredHours"
              id="hoursPerWeek"
              onChange={(e) => setEnteredHours(e.target.value)}
              required
            />
          </div>
          <div className={styles.formTextInput}>
            <input
              type="text"
              placeholder="Location"
              name="enteredLocation"
              id="location"
              onChange={(e) => setEnteredLocation(e.target.value)}
              required
            />
          </div>
          <div className={styles.formDateInput}>
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              placeholder="Start Date"
              name="enteredDate"
              id="startDate"
              onChange={(e) => setEnteredDate(e.target.value)}
              required
            />
          </div>
          <div className={styles.formTextInput}>
            <input
              type="text"
              placeholder="Employer Contact Number"
              name="enteredContactNumber"
              id="contactNo"
              onChange={(e) => setEnteredContactNumber(e.target.value)}
              required
            />
          </div>
          <div className={styles.formTextInput}>
            <input
              type="text"
              placeholder="Employer Contact Email"
              name="enteredContactEmail"
              id="contactEmail"
              onChange={(e) => setEnteredContactEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formTextInput}>
            <input
              type="text"
              placeholder="Application Link"
              name="enteredApplicationLink"
              id="appLink"
              onChange={(e) => setEnteredApplicationLink(e.target.value)}
              required
            />
          </div>
          <div className={styles.formTextInput}>
            <textarea
              placeholder="Job Description and Requirements"
              name="enteredJobDescription"
              id="enteredDesc"
              onChange={(e) => setEnteredJobDescription(e.target.value)}
              required
            />
          </div>
          <div className={styles.submit}>
            <input
              type="submit"
              name="submit"
              value="Add"
              onClick={(e) => addJob(e)}
            />
            <button onClick={() => setIsAddJobWidgetShowing(false)}>
              Cancel
            </button>
          </div>
        </form>
        <div>
          <p>{messageToShow}</p>
        </div>
      </div>
    </div>
  );
}

export default AddJobWidget;
