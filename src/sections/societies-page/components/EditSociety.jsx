import { React, useState } from 'react';
import styles from '../styling/EditSociety.module.css';

function EditSociety({ setIsEditSocietyShowing }) {
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
                type='text'
                name='enteredSocietyName'
                id='SocietyName'
              />
            </div>
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="enteredLeaderName">Name (Society Leader)</label>
            <input
              type='text'
              name='enteredLeaderName'
              id='enteredLeaderName'
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="enteredLink">Link</label>
            <input
              type='text'
              name='enteredLink'
              id='enteredLink'
            />
          </div>
          <div className={styles.formTextInput}>
            <label htmlFor="enteredDescription">Society Description</label>
            <textarea
              name='enteredDescription'
              id='enteredDescription'
            />
          </div>
          <div className={styles.submit}>
            <input
              type='submit'
              name='submit'
              value='Edit'
            />
            <button onClick={() => setIsEditSocietyShowing(false)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditSociety;
