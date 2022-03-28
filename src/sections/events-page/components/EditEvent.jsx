import { React, useState } from 'react';
import styles from '../styling/EditEvent.module.css';

function EditEvent({ setIsEditEventShowing }) {
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
                type='text'
                name='EventTitle'
                id='enteredTitle'
                value=""
                required
              />
            </div>
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="EventLocation">Event Location</label>
            <input
              type='text'
              name='EventLocation'
              id='enteredLocation'
              value=""
              required
            />
          </div>
          <div className={styles.row0}>
            <div className={styles.formDateInput}>
              <label htmlFor='stime'>Start Date And Time</label>
              <input
                type='datetime-local'
                name='StartTime'
                id='enteredStartDateTime'
                value=""
                required
              />
            </div>
            <div className={styles.horizontalSpacer}></div>
            <div className={styles.formDateInput}>
              <label htmlFor='etime'>End Date And Time</label>
              <input
                type='datetime-local'
                name='EndTime'
                id='enteredEndDateTime'
                value=""
                required
              />
            </div>
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="name">Name (Head of Organiser)</label>
            <input
              type='text'
              name='name'
              id='enteredOrganizerName'
              value=""
              required
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="email">Contact Email</label>
            <input
              type='text'
              name='email'
              id='enteredContactEmail'
              value=""
              required
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="phonenum">Contact Phone Number</label>
            <input
              type='text'
              name='phonenum'
              id='enteredContactPhoneNumber'
              value=""
              required
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="desc">Event Description</label>
            <textarea
              name='desc'
              id='enteredDescription'
              value=""
              required
            />
          </div>
          <div className={styles.submit}>
            <input
              type='submit'
              name='submit'
              value='Edit'
            />
            <button onClick={() => setIsEditEventShowing(false)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditEvent;
