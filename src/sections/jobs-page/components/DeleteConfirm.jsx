import { React, useState } from 'react';
import styles from '../styling/DeleteConfirm.module.css';

function DeleteConfirm({ setIsConfirmDeleteShowing }) {
  return (
    <div className={styles.background}>
      <div className={styles.deletePopUp}>
        <header className={styles.header}>
          <h1>Are you sure?</h1>
        </header>
        <p>Warning! Deletion is irreversible</p>
        <form className={styles.formDelete}>
          <div className={styles.confirmDelete}>
            <input
              type='submit'
              name='confirmDelete'
              value='Yes'
            />
            <button onClick={() => setIsConfirmDeleteShowing(false)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DeleteConfirm;
