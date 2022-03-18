import React from 'react'
import styles from "../styling/AddEventWidget.module.css"

function AddEventWidget({ add, setAdd }) {
    return (
    <div className={styles.background}>
        <div className = {styles.addEventsWidget}>
            <header className={styles.header}>
                <h1>Event Details</h1>
            </header>
            <form className = {styles.form}>
                <div className={styles.row0}>
                    <div className={styles.formTextInput}>
                        <input  type="text" placeholder="Event Title" name="EventTitle" id="EventTitle" required />
                    </div>
                </div> 
                <div className={styles.formTextInput}>
                        <input  type="text" placeholder="Event Location" name="EventLocation" id="EventLocation" required />
                    </div>
                <div className={styles.formDateInput}>
                    <label htmlFor="dob">Date</label>
                    <input  type="date" name="psw-confirm" id="psw-confirm" required />
                </div> 
                <div className={styles.row0}>
                    <div className={styles.formDateInput}>
                        <label htmlFor="stime">Start Time</label>
                        <input  type="time" placeholder="Start Time" name="StartTime" id="StartTime" required />
                    </div>
                    <div className={styles.horizontalSpacer}></div>
                    <div className={styles.formDateInput}>
                        <label htmlFor="etime">End Time</label>
                        <input type="time" placeholder="End Time" name="EndTime" id="EndTime" required />
                    </div>
                </div> 
                <div className={styles.formTextInput}>
                    <input type="text" placeholder="Name (Head of Organiser)" name="name" id="name" required />
                </div>
                <div className={styles.formTextInput}>
                    <input type="text" placeholder="Username (Head of Organiser)" name="username" id="username" required />
                </div>
                <div className={styles.formTextInput}>
                    <input type="text" placeholder="Contact Email" name="email" id="email" required />
                </div>
                <div className = {styles.formTextInput}>
                    <input type="text" placeholder="Contact Phone Number" name="phonenum" id="phonenum" required />
                </div>
                <div className = {styles.formTextInput}>
                    <textarea placeholder="Event Description" name="desc" id="desc" required />
                </div>
                <div className = {styles.submit}>
                    <input
                    type = "submit"
                    name = "submit"
                    value = "Add"
                    />
                    <button onClick={() => setAdd(false)}>Cancel</button>
                </div>
            </form>
        </div>
    </div>    
); 
}

export default AddEventWidget

