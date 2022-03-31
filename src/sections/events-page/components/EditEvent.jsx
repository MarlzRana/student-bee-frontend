import { React, useState, useEffect } from "react";
import styles from "../styling/EditEvent.module.css";
import Axios from "axios";

function EditEvent({ setIsEditEventShowing, eventID }) {
  Axios.defaults.withCredentials = true;
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredStartDateTime, setEnteredStartDateTime] = useState("");
  const [enteredEndDateTime, setEnteredEndDateTime] = useState("");
  const [enteredLocation, setEnteredLocation] = useState("");
  const [enteredOrganizerName, setEnteredOrganizerName] = useState("");
  const [enteredContactEmail, setEnteredContactEmail] = useState("");
  const [enteredContactPhoneNumber, setEnteredContactPhoneNumber] =
    useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [messageToShow, setMessageToShow] = useState("");

  useEffect(() => {
    const setInputs = async () => {
      Axios.defaults.withCredentials = true;
      const payload = {
        eventID: eventID,
      };
      const res = await Axios.post(
        process.env.REACT_APP_APIHOSTADDRESS + "/eventsSystem/getEventDetails",
        payload
      );
      if (res.data.status === "failure") {
        return;
      }
      setEnteredContactEmail(res.data.eventInformation.contactEmail);
      setEnteredContactPhoneNumber(
        res.data.eventInformation.contactPhoneNumber
      );
      setEnteredDescription(res.data.eventInformation.description);
      setEnteredLocation(res.data.eventInformation.location);
      setEnteredOrganizerName(res.data.eventInformation.organizerName);
      setEnteredTitle(res.data.eventInformation.title);

      const currentStartDate = res.data.eventInformation.startDatetime;
      const currentStart = currentStartDate.split("T");
      const startDate = currentStart[0].split("-");
      const startTime = currentStart[1].split(":");
      const startdd = startDate[2];
      const startmm = startDate[1];
      const startyy = startDate[0];
      const starthh = startTime[0];
      const startmin = startTime[1];
      const correctStartDate =
        startyy +
        "-" +
        startmm +
        "-" +
        startdd +
        "T" +
        starthh +
        ":" +
        startmin;
      setEnteredStartDateTime(correctStartDate);

      const currentEndDate = res.data.eventInformation.endDatetime;
      const currentEnd = currentEndDate.split("T");
      const endDate = currentEnd[0].split("-");
      const endTime = currentEnd[1].split(":");
      const enddd = endDate[2];
      const endmm = endDate[1];
      const endyy = endDate[0];
      const endhh = endTime[0];
      const endmin = endTime[1];
      const correctEndDate =
        endyy + "-" + endmm + "-" + enddd + "T" + endhh + ":" + endmin;
      setEnteredEndDateTime(correctEndDate);
    };
    setInputs();
  }, []);

  const editEvent = async (e) => {
    e.preventDefault();
    const payload = {
      eventID: eventID,
      title: enteredTitle,
      startDateTime: enteredStartDateTime,
      endDateTime: enteredEndDateTime,
      location: enteredLocation,
      organizerName: enteredOrganizerName,
      contactEmail: enteredContactEmail,
      contactPhoneNumber: enteredContactPhoneNumber,
      description: enteredDescription,
    };
    console.log(payload);
    try {
      const res = await Axios.post(
        process.env.REACT_APP_APIHOSTADDRESS + "/eventsSystem/editEventDetails",
        payload
      );
      if (res.data.status === "success") {
        setMessageToShow("Success! Your event has been edited");
        // setEnteredTitle("");
        // setEnteredStartDateTime("");
        // setEnteredEndDateTime("");
        // setEnteredLocation("");
        // setEnteredOrganizerName("");
        // setEnteredContactEmail("");
        // setEnteredContactPhoneNumber("");
        // setEnteredDescription("");
      }
      if (res.data.status === "failure") {
        if (res.data.reason === "invalidInputFormat") {
          setMessageToShow("Invalid inputs");
        }
      }
      console.log(res);
    } catch (error) {
      window.confirm("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.editEvent}>
        <header className={styles.header}>
          <h1>Edit Event Details</h1>
        </header>
        <form className={styles.form}>
          <div className={styles.row0}>
            <div className={styles.formTextInput}>
              <label htmlFor="EventTitle">Event Title</label>
              <input
                type="text"
                name="enteredTitle"
                id="enteredTitle"
                value={enteredTitle || ""}
                onChange={(e) => setEnteredTitle(e.target.value)}
                required
              />
            </div>
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="EventLocation">Event Location</label>
            <input
              type="text"
              name="enteredLocation"
              id="enteredLocation"
              value={enteredLocation || ""}
              onChange={(e) => setEnteredLocation(e.target.value)}
              required
            />
          </div>
          <div className={styles.row0}>
            <div className={styles.formDateInput}>
              <label htmlFor="stime">Start Date And Time</label>
              <input
                type="datetime-local"
                name="enteredStartDateTime"
                id="enteredStartDateTime"
                value={enteredStartDateTime || ""}
                onChange={(e) => setEnteredStartDateTime(e.target.value)}
                required
              />
            </div>
            <div className={styles.horizontalSpacer}></div>
            <div className={styles.formDateInput}>
              <label htmlFor="etime">End Date And Time</label>
              <input
                type="datetime-local"
                name="enteredEndDateTime"
                id="enteredEndDateTime"
                value={enteredEndDateTime || ""}
                onChange={(e) => setEnteredEndDateTime(e.target.value)}
                required
              />
            </div>
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="name">Name (Head of Organiser)</label>
            <input
              type="text"
              name="enteredOrganizerName"
              id="enteredOrganizerName"
              value={enteredOrganizerName || ""}
              onChange={(e) => setEnteredOrganizerName(e.target.value)}
              required
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="email">Contact Email</label>
            <input
              type="text"
              name="enteredContactEmail"
              id="enteredContactEmail"
              value={enteredContactEmail || ""}
              onChange={(e) => setEnteredContactEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="phonenum">Contact Phone Number</label>
            <input
              type="text"
              name="enteredContactPhoneNumber"
              id="enteredContactPhoneNumber"
              value={enteredContactPhoneNumber || ""}
              onChange={(e) => setEnteredContactPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="desc">Event Description</label>
            <textarea
              name="enteredDescription"
              id="enteredDescription"
              value={enteredDescription || ""}
              onChange={(e) => setEnteredDescription(e.target.value)}
              required
            />
          </div>
          <div className={styles.submit}>
            <input
              type="submit"
              name="submit"
              value="Edit"
              onClick={(e) => editEvent(e)}
            />
            <button onClick={() => setIsEditEventShowing(false)}>Cancel</button>
          </div>
        </form>
        <p>{messageToShow}</p>
      </div>
    </div>
  );
}

export default EditEvent;
