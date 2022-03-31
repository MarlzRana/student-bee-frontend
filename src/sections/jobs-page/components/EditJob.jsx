import { React, useState, useEffect } from "react";
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

  useEffect(() => {
    const setInputs = async () => {
      Axios.defaults.withCredentials = true;
      const payload = {
        jobID: jobID,
      };
      const res = await Axios.post(
        process.env.REACT_APP_APIHOSTADDRESS + "/jobsSystem/getJobDetails",
        payload
      );
      if (res.data.status === "failure") {
        return;
      }
      setEnteredApplicationLink(res.data.jobInformation.applicationLink);
      setEnteredContactEmail(res.data.jobInformation.employerContactEmail);
      setEnteredContactNumber(
        res.data.jobInformation.employerContactPhoneNumber
      );
      setEnteredHours(res.data.jobInformation.workingHours);
      setEnteredJobDescription(res.data.jobInformation.description);
      setEnteredJobName(res.data.jobInformation.jobTitle);
      setEnteredLocation(res.data.jobInformation.location);
      setEnteredWage(res.data.jobInformation.wage);

      const currentStartDate = res.data.jobInformation.startDate;
      console.log(res.data.jobInformation.startDate);
      const currentStart = currentStartDate.split("/");
      const startyy = currentStart[2];

      if (currentStart[1].length < 2) {
        const startmm = "0" + currentStart[1];
        if (currentStart[0].length < 2) {
          const startdd = "0" + currentStart[0];
          const correctStartDate = startyy + "-" + startmm + "-" + startdd;
          setEnteredDate(correctStartDate);
        } else {
          const startdd = currentStart[0];
          const correctStartDate = startyy + "-" + startmm + "-" + startdd;
          setEnteredDate(correctStartDate);
        }
      } else {
        const startmm = currentStart[1];
        if (currentStart[0].length < 2) {
          const startdd = "0" + currentStart[0];
          const correctStartDate = startyy + "-" + startmm + "-" + startdd;
          setEnteredDate(correctStartDate);
        } else {
          const startdd = currentStart[0];
          const correctStartDate = startyy + "-" + startmm + "-" + startdd;
          setEnteredDate(correctStartDate);
        }
      }
    };
    setInputs();
  }, []);

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
        setMessageToDisplay("Your job was successfully edited");
      }
      if (res.data.status === "failure") {
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
                value={enteredJobName || ""}
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
              value={enteredWage || ""}
              onChange={(e) => setEnteredWage(e.target.value)}
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="hoursPerWeek">Working hours per week</label>
            <input
              type="text"
              name="enteredHours"
              id="hoursPerWeek"
              value={enteredHours || ""}
              onChange={(e) => setEnteredHours(e.target.value)}
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="enteredLocation"
              id="location"
              value={enteredLocation || ""}
              onChange={(e) => setEnteredLocation(e.target.value)}
            />
          </div>
          <div className={styles.formDateInput}>
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              name="enteredDate"
              id="startDate"
              value={enteredDate || ""}
              onChange={(e) => setEnteredDate(e.target.value)}
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="contactNo">Employer Contact Number</label>
            <input
              type="text"
              name="enteredContactNumber"
              id="contactNo"
              value={enteredContactNumber || ""}
              onChange={(e) => setEnteredContactNumber(e.target.value)}
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="contactEmail">Employer Contact Email</label>
            <input
              type="text"
              name="enteredContactEmail"
              id="contactEmail"
              value={enteredContactEmail || ""}
              onChange={(e) => setEnteredContactEmail(e.target.value)}
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="appLink">Application Link</label>
            <input
              type="text"
              name="enteredApplicationLink"
              id="appLink"
              value={enteredApplicationLink || ""}
              onChange={(e) => setEnteredApplicationLink(e.target.value)}
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="JobDesc">Job Description and Requirements</label>
            <textarea
              name="enteredJobDescription"
              id="enteredDes"
              value={enteredJobDescription || ""}
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
