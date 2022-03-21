import { React, useState } from 'react';
import Axios from 'axios';
import styles from '../styling/AddEventWidget.module.css';

function AddEventWidget({ setIsAddEventWidgetShowing }) {
  Axios.defaults.withCredentials = true;
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredStartDateTime, setEnteredStartDateTime] = useState('');
  const [enteredEndDateTime, setEnteredEndDateTime] = useState('');
  const [enteredLocation, setEnteredLocation] = useState('');
  const [enteredOrganizerName, setEnteredOrganizerName] = useState('');
  const [enteredContactEmail, setEnteredContactEmail] = useState('');
  const [enteredContactPhoneNumber, setEnteredContactPhoneNumber] =
    useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [messageToShow, setMessageToShow] = useState('');
  const addEvent = async (e) => {
    e.preventDefault();
    const payload = {
      title: enteredTitle,
      startDateTime: enteredStartDateTime,
      endDateTime: enteredEndDateTime,
      location: enteredLocation,
      organizerName: enteredOrganizerName,
      contactEmail: enteredContactEmail,
      contactPhoneNumber: enteredContactPhoneNumber,
      description: setEnteredDescription,
    };
    try {
      const res = await Axios.post(
        process.env.REACT_APP_APIHOSTADDRESS + '/eventsSystem/addEvent',
        payload
      );
      if (res.data.status === 'success') {
        setMessageToShow('Success! Your event has been added');
        setEnteredTitle('');
        setEnteredStartDateTime('');
        setEnteredEndDateTime('');
        setEnteredLocation('');
        setEnteredOrganizerName('');
        setEnteredContactEmail('');
        setEnteredContactPhoneNumber('');
        setEnteredDescription('');
      }
      if (res.data.status === 'failure') {
        if (res.data.reason === 'invalidInputFormat') {
          setMessageToShow('Invalid inputs');
        }
      }
    } catch (error) {
      window.confirm('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.addEventsWidget}>
        <header className={styles.header}>
          <h1>Event Details</h1>
        </header>
        <form className={styles.form}>
          <div className={styles.row0}>
            <div className={styles.formTextInput}>
              <input
                type='text'
                placeholder='Event Title'
                name='EventTitle'
                id='enteredTitle'
                value={enteredTitle}
                onChange={(e) => setEnteredTitle(e.target.value)}
                required
              />
            </div>
          </div>
          <div className={styles.formTextInput}>
            <input
              type='text'
              placeholder='Event Location'
              name='EventLocation'
              id='enteredLocation'
              value={enteredLocation}
              onChange={(e) => setEnteredLocation(e.target.value)}
              required
            />
          </div>
          <div className={styles.row0}>
            <div className={styles.formDateInput}>
              <label htmlFor='stime'>Start Date And Time</label>
              <input
                type='datetime-local'
                placeholder='Start Time'
                name='StartTime'
                id='enteredStartDateTime'
                value={enteredStartDateTime}
                onChange={(e) => setEnteredStartDateTime(e.target.value)}
                required
              />
            </div>
            <div className={styles.horizontalSpacer}></div>
            <div className={styles.formDateInput}>
              <label htmlFor='etime'>End Date And Time</label>
              <input
                type='datetime-local'
                placeholder='End Time'
                name='EndTime'
                id='enteredEndDateTime'
                value={enteredEndDateTime}
                onChange={(e) => setEnteredEndDateTime(e.target.value)}
                required
              />
            </div>
          </div>
          <div className={styles.formTextInput}>
            <input
              type='text'
              placeholder='Name (Head of Organiser)'
              name='name'
              id='enteredOrganizerName'
              value={enteredOrganizerName}
              onChange={(e) => setEnteredOrganizerName(e.target.value)}
              required
            />
          </div>
          <div className={styles.formTextInput}>
            <input
              type='text'
              placeholder='Contact Email'
              name='email'
              id='enteredContactEmail'
              value={enteredContactEmail}
              onChange={(e) => setEnteredContactEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formTextInput}>
            <input
              type='text'
              placeholder='Contact Phone Number'
              name='phonenum'
              id='enteredContactPhoneNumber'
              value={enteredContactPhoneNumber}
              onChange={(e) => setEnteredContactPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className={styles.formTextInput}>
            <textarea
              placeholder='Event Description'
              name='desc'
              id='enteredDescription'
              value={enteredDescription}
              onChange={(e) => setEnteredDescription(e.target.value)}
              required
            />
          </div>
          <div className={styles.submit}>
            <input
              type='submit'
              name='submit'
              value='Add'
              onClick={(e) => addEvent(e)}
            />
            <button onClick={() => setIsAddEventWidgetShowing(false)}>
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

export default AddEventWidget;
