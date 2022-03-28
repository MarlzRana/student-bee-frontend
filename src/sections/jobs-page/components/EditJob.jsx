import { React, useState } from 'react';
import styles from '../styling/EditJob.module.css';

function EditJob({ setIsEditJobShowing }) {
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
                type='text'
                name='enteredJobName'
                id='JobName'
              />
            </div>
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="wage">Wage</label>
            <input
              type='text'
              name='enteredWage'
              id='wage'
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="hoursPerWeek">Working hours per week</label>
            <input
              type='text'
              name='enteredHours'
              id='hoursPerWeek'
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="location">Location</label>
            <input
              type='text'
              name='enteredLocation'
              id='location'
            />
          </div>
          <div className={styles.formDateInput}>
            <label htmlFor="startDate">Start Date</label>
            <input
              type='date'
              name='enteredDate'
              id='startDate'
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="contactNo">Employer Contact Number</label>
            <input
              type='text'
              name='enteredContactNumber'
              id='contactNo'
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="contactEmail">Employer Contact Email</label>
            <input
              type='text'
              name='enteredContactEmail'
              id='contactEmail'
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="appLink">Application Link</label>
            <input
              type='text'
              name='enteredApplicationLink'
              id='appLink'
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="JobDesc">Job Description and Requirements</label>
            <textarea
              name='enteredJobDescription'
              id='enteredDes'
            />
          </div>
          <div className={styles.submit}>
            <input
              type='submit'
              name='submit'
              value='Edit'
            />
            <button onClick={() => setIsEditJobShowing(false)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditJob;
