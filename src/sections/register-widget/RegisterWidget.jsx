import React from 'react'
import styles from "./RegisterWidget.module.css"
import { Link } from 'react-router-dom'

function RegisterWidget() {
    return (
    <div className={styles.temp}>
    <div className = {styles.registerWidget}>
        <header className={styles.header}>
            <h1>Join the hive</h1>
        </header>
        <form className = {styles.form}>
            <div className={styles.row0}>
                <div className={styles.formTextInput}>
                    <input  type="text" placeholder="First Name" name="FirstName"   id="FirstName" required />
                </div>
                <div className={styles.horizontalSpacer}></div>
                <div className={styles.formTextInput}>
                    <input type="text" placeholder="Last Name" name="LastName" id="LastName" required />
                </div>
            </div>   
            <div className={styles.formTextInput}>
                <input type="text" placeholder="Email" name="email" id="email" required />
            </div>
            <div className = {styles.formTextInput}>
                <input type="text" placeholder="Username" name="username" id="username" required />
            </div>
            <div className={styles.formTextInput}>
                <input type="password" placeholder="Password" name="psw" id="psw" required />
            </div>
            <div className={styles.formTextInput}>
                <input type="password" placeholder="Confirm Password" name="psw-confirm" id="psw-confirm" required />
            </div>
            <div className={styles.formDateInput}>
                <label htmlFor="dob">Date of Birth:</label>
                <input  type="date" name="psw-confirm" id="psw-confirm" required />
            </div>
            <div className={styles.errorMessage}>
                <p>That username already exists!</p>
            </div>
            <div className = {styles.submit}>
                <input
                type = "submit"
                name = "submit"
                value = "Register"
                />
                <Link to='/login'>Already have an account?</Link>
            </div>
        </form>

    </div>
    </div>
); 
}

export default RegisterWidget
