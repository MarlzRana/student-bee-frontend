import { React, useState } from 'react';
import styles from '../styling/AddSocietyWidget.module.css';

function AddSocietyWidget({ setIsAddSocietyWidgetShowing }) {
  return (
    <div className={styles.background}>
      <div className={styles.addEventsWidget}>
        <header className={styles.header}>
          <h1>Society Details</h1>
        </header>
        <form className={styles.form}>
          <div className={styles.row0}>
            <div className={styles.formTextInput}>
              <input
                type='text'
                placeholder='Society Name'
                name='SocietyName'
                id='SocietyName'
                required
              />
            </div>
          </div>
          <div className={styles.formTextInput}>
            <input
              type='text'
              placeholder='Username (Society Leader)'
              name='username'
              id='enteredLeaderName'
              required
            />
          </div>
          <div className={styles.formTextInput}>
            <input
              type='text'
              placeholder='Name (Society Leader)'
              name='name'
              id='enteredLeaderName'
              required
            />
          </div>
          <div className={styles.formTextInput}>
            <input
              type='text'
              placeholder='Link (Discord, Instagram, etc)'
              name='link'
              id='enteredLink'
              required
            />
          </div>
          <div className={styles.formTextInput}>
            <textarea
              placeholder='Society Description'
              name='desc'
              id='enteredDescription'
              required
            />
          </div>
          <div className={styles.submit}>
            <input
              type='submit'
              name='submit'
              value='Add'
            />
            <button onClick={() => setIsAddSocietyWidgetShowing(false)}>
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

export default AddSocietyWidget;
