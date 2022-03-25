import { React } from 'react';
import styles from '../styling/AddJobWidget.module.css';

function AddJobWidget({ setIsAddJobWidgetShowing }) {
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
                type='text'
                placeholder='Job Name'
                name='JobName'
                id='JobName'
                required
              />
            </div>
          </div>
          <div className={styles.formTextInput}>
            <input
              type='text'
              placeholder='Wage'
              name='wage'
              id='wage'
              required
            />
          </div>
          <div className={styles.formTextInput}>
            <input
              type='text'
              placeholder='Working hours per week'
              name='hoursPerWeek'
              id='hoursPerWeek'
              required
            />
          </div>
          <div className={styles.formTextInput}>
            <input
              type='text'
              placeholder='Location'
              name='location'
              id='location'
              required
            />
          </div>
          <div className={styles.formDateInput}>
            <label htmlFor="startDate">Start Date</label>
            <input
              type='date'
              placeholder='Start Date'
              name='startDate'
              id='startDate'
              required
            />
          </div>
          <div className={styles.formTextInput}>
            <input
              type='text'
              placeholder='Employer Contact Number'
              name='contactNo'
              id='contactNo'
              required
            />
          </div>
          <div className={styles.formTextInput}>
            <input
              type='text'
              placeholder='Employer Contact Email'
              name='contactEmail'
              id='contactEmail'
              required
            />
          </div>
          <div className={styles.formTextInput}>
            <input
              type='text'
              placeholder='Application Link'
              name='appLink'
              id='appLink'
              required
            />
          </div>
          <div className={styles.formTextInput}>
            <textarea
              placeholder='Job Description and Requirements'
              name='desc'
              id='enteredDesc'
              required
            />
          </div>
          <div className={styles.submit}>
            <input
              type='submit'
              name='submit'
              value='Add'
            />
            <button onClick={() => setIsAddJobWidgetShowing(false)}>
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

export default AddJobWidget;
