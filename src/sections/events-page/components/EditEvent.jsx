import { React, useState } from "react";
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
        setEnteredTitle("");
        setEnteredStartDateTime("");
        setEnteredEndDateTime("");
        setEnteredLocation("");
        setEnteredOrganizerName("");
        setEnteredContactEmail("");
        setEnteredContactPhoneNumber("");
        setEnteredDescription("");
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
              onChange={(e) => setEnteredContactPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="desc">Event Description</label>
            <textarea
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
