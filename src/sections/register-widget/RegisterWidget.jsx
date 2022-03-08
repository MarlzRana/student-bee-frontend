import React from 'react'
import styles from "./RegisterWidget.module.css"
import { Link } from 'react-router-dom'

function RegisterWidget() {
    return (
    <div className = {styles.registerWidget}>
        <form className = {styles.form}>
            <div className = {styles.formTextInput}>
            <input className = {styles.box} type="text" placeholder="Username" name="username" id="username" required />
            </div>

            <div>
            <input className = {styles.box} type="text" placeholder="First Name" name="FirstName" id="FirstName" required />
            </div>

            <div>
            <input className = {styles.box} type="text" placeholder="Last Name" name="LastName" id="LastName" required />
            </div>

            <div>
            <input className = {styles.box} type="text" placeholder="Email" name="email" id="email" required />
            </div>

            <div>
            <input className = {styles.box} type="password" placeholder="Password" name="psw" id="psw" required />
            </div>

            <div>
            <input className = {styles.box} type="password" placeholder="Confirm Password" name="psw-confirm" id="psw-confirm" required />
            </div>

            <input
            className = {styles.submit}
            type = "submit"
            name = "submit"
            value = "Register"
            />

            <div className = {styles.signIn}>
            <Link to='/login'>Already have an account?</Link>
            </div>
        
        </form>

    </div>
) 
}

export default RegisterWidget

