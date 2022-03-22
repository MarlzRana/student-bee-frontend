import styles from "./EditProfile.module.css";
import { Suspense, lazy, useState } from "react";
import Axios from "axios";

const LeftPanel = lazy(() => import("./components/LeftPanel"));

function EditProfile() {
  Axios.defaults.withCredentials = true;

  const [alertMessage, setAlertMessage] = useState("");
  const [enteredBio, setEnteredBio] = useState("");
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredDob, setEnteredDob] = useState("");
  const [enteredYear, setEnteredYear] = useState("");
  const [enteredCourse, setEnteredCourse] = useState("");
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredNewPassword, setEnteredNewPassword] = useState("");
  const [enteredConfirmNewPassword, setEnteredConfirmNewPassword] =
    useState("");

  const updateProfile = async (e) => {
    e.preventDefault();
    const payload = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      dob: enteredDob,
      bio: enteredBio,
      studentYear: enteredYear,
      course: enteredCourse,
      username: enteredUsername,
      password: enteredPassword,
      newPassword: enteredNewPassword,
    };
    console.log(payload);
    if (enteredNewPassword == enteredConfirmNewPassword) {
      try {
        const res = await Axios.post(
          process.env.REACT_APP_APIHOSTADDRESS + "/loginSystem/editProfile",
          payload
        );
        console.log(res);
        if (res.data.status == "failure") {
          if (res.data.reason == "Invalid Input Format") {
            window.confirm("One of your inputs were invalid");
          } else if (res.data.reason == "Username already taken") {
            window.confirm("That username is already taken");
          } else if (res.data.reason == "Password Incorrect") {
            window.confirm("The password you entered was not correct");
          }
        } else {
          window.confirm("Success!");
        }
      } catch (error) {
        window.confirm("Something went wrong. Please try again later.");
      }
    } else {
      window.confirm("Your passwords do not match");
    }
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.editProfile}>
        <div className={styles.leftProfilePanel}>
          <LeftPanel />
        </div>
        <div className={styles.editSection}>
          <form className={styles.editProfileForm}>
            <div className={styles.leftColumn}>
              <div className={styles.formBio}>
                <label htmlFor="aboutMe">Bio</label>
                <br />
                <textarea
                  placeholder="150 characters limit"
                  name="enteredBio"
                  id="aboutMe"
                  onChange={(e) => setEnteredBio(e.target.value)}
                />
              </div>
              <div className={styles.formEditInput}>
                <label htmlFor="FirstName">First Name</label>
                <br />
                <input
                  type="text"
                  name="enteredFirstName"
                  id="FirstName"
                  onChange={(e) => setEnteredFirstName(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formEditInput}>
                <label htmlFor="LastName">Last Name</label>
                <br />
                <input
                  type="text"
                  name="enteredLastName"
                  id="LastName"
                  onChange={(e) => setEnteredLastName(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formEditInput}>
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  name="enteredDob"
                  id="dob"
                  onChange={(e) => setEnteredDob(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formEditInput}>
                <label htmlFor="year">Year</label>
                <br />
                <select
                  name="enteredYear"
                  id="year"
                  onChange={(e) => setEnteredYear(e.target.value)}
                  required
                >
                  <option value="first">1st</option>
                  <option value="second">2nd</option>
                  <option value="third">3rd</option>
                  <option value="fourth">4th</option>
                </select>
              </div>
              <div className={styles.formEditInput}>
                <label htmlFor="course">Course</label>
                <br />
                <input
                  type="text"
                  name="enteredCourse"
                  id="course"
                  onChange={(e) => setEnteredCourse(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.formEditInput}>
                <label htmlFor="username">Username</label>
                <br />
                <input
                  type="text"
                  name="enteredUsername"
                  id="username"
                  onChange={(e) => setEnteredUsername(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formEditInput}>
                <label htmlFor="email">Email Address</label>
                <br />
                <input
                  type="text"
                  name="enteredEmail"
                  id="email"
                  onChange={(e) => setEnteredEmail(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formEditInput}>
                <label htmlFor="psw">Current Password</label>
                <br />
                <input
                  type="password"
                  name="entered"
                  id="psw"
                  onChange={(e) => setEnteredPassword(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formEditInput}>
                <label htmlFor="newPassword"> New Password</label>
                <br />
                <input
                  type="password"
                  name="enteredNewPassword"
                  id="newPassword"
                  onChange={(e) => setEnteredNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formEditInput}>
                <label htmlFor="confirmNewPassword">Confirm New Password</label>
                <br />
                <input
                  type="password"
                  name="enteredConfirmNewPassword"
                  id="confirmNewPassword"
                  onChange={(e) => setEnteredConfirmNewPassword(e.target.value)}
                  required
                />
              </div>

              <div className={styles.warningMessage}>
                Warning! This action is irreversible
              </div>
              <button className={styles.deleteProfileButton}>
                Delete Profile
              </button>
              <button
                className={styles.saveChangesButton}
                onClick={(e) => updateProfile(e)}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </Suspense>
  );
}

export default EditProfile;
