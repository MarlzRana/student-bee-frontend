import styles from "./EditProfile.module.css";
import { Suspense, lazy, useState, useEffect } from "react";
import Axios from "axios";

const LeftPanel = lazy(() => import("./components/LeftPanel"));

function EditProfile() {
  Axios.defaults.withCredentials = true;

  const [alertMessage, setAlertMessage] = useState(
    "Warning! This action is irreversible"
  );
  const [enteredBio, setEnteredBio] = useState("");
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredDob, setEnteredDob] = useState("");
  const [enteredYear, setEnteredYear] = useState("1st");
  const [enteredCourse, setEnteredCourse] = useState("");
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredNewPassword, setEnteredNewPassword] = useState("");
  const [enteredConfirmNewPassword, setEnteredConfirmNewPassword] =
    useState("");

  useEffect(() => {
    const setInputs = async () => {
      Axios.defaults.withCredentials = true;
      const res = await Axios.get(
        process.env.REACT_APP_APIHOSTADDRESS + "/loginSystem/getCurrentUsername"
      );
      if (res.data.status === "failure") {
        return;
      }
      setEnteredUsername(res.data.username);
      const payload = {
        username: res.data.username,
      };
      const res2 = await Axios.post(
        process.env.REACT_APP_APIHOSTADDRESS +
          "/loginSystem/getPersonalInformation",
        payload
      );
      if (res2.data.status === "failure") {
        return;
      }
      setEnteredBio(res2.data.userInformation.bio);
      setEnteredCourse(res2.data.userInformation.courseName);
      setEnteredEmail(res2.data.userInformation.emailAddress);
      setEnteredFirstName(res2.data.userInformation.firstName);
      setEnteredLastName(res2.data.userInformation.lastName);
      setEnteredUsername(res2.data.userInformation.username);

      const dateIncorrectFormat = new Date(res2.data.userInformation.dob);
      const year = dateIncorrectFormat.getFullYear();

      if ((dateIncorrectFormat.getMonth() + 1).length < 2) {
        const month = "" + (dateIncorrectFormat.getMonth() + 1);
        if (dateIncorrectFormat.getDate().length < 2) {
          const day = "" + dateIncorrectFormat.getDate();
          const dateCorrectFormat = [year, month, day].join("-");
          setEnteredDob(dateCorrectFormat);
        } else {
          const day = "0" + dateIncorrectFormat.getDate();
          const dateCorrectFormat = [year, month, day].join("-");
          setEnteredDob(dateCorrectFormat);
        }
      } else {
        const month = "0" + (dateIncorrectFormat.getMonth() + 1);
        if (dateIncorrectFormat.getDate().length < 2) {
          const day = "" + dateIncorrectFormat.getDate();
          const dateCorrectFormat = [year, month, day].join("-");
          setEnteredDob(dateCorrectFormat);
        } else {
          const day = "0" + dateIncorrectFormat.getDate();
          const dateCorrectFormat = [year, month, day].join("-");
          setEnteredDob(dateCorrectFormat);
        }
      }
    };
    setInputs();
  }, []);

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
    if (enteredNewPassword == enteredConfirmNewPassword) {
      try {
        const res = await Axios.post(
          process.env.REACT_APP_APIHOSTADDRESS + "/loginSystem/editProfile",
          payload
        );
        if (res.data.status == "failure") {
          if (res.data.reason == "Invalid Input Format") {
            if (!res.data.validationCheckDetails.course) {
              setAlertMessage("Please specify your course");
            } else if (!res.data.validationCheckDetails.dob) {
              setAlertMessage("Please specify your date of birth");
            } else if (!res.data.validationCheckDetails.emailAddress) {
              setAlertMessage("Please specify your email address");
            } else if (!res.data.validationCheckDetails.firstName) {
              setAlertMessage("Please specify your first name");
            } else if (!res.data.validationCheckDetails.lastName) {
              setAlertMessage("Please specify your last name");
            } else if (!res.data.validationCheckDetails.newPassword) {
              setAlertMessage("Please provide a new password");
            } else if (!res.data.validationCheckDetails.username) {
              setAlertMessage("Please provide a username");
            } else if (!res.data.validationCheckDetails.studentYear) {
              setAlertMessage("Please specify your current year of study");
            }
          } else if (res.data.reason == "Username already taken") {
            setAlertMessage("That username is already taken");
          } else if (res.data.reason == "Password Incorrect") {
            setAlertMessage("The password you entered was incorrect");
          }
        } else {
          setAlertMessage("Success!");
        }
      } catch (error) {
        window.confirm("Something went wrong. Please try again later.");
      }
    } else {
      setAlertMessage("Your passwords do not match");
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
                  value={enteredBio || ""}
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
                  value={enteredFirstName || ""}
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
                  defaultValue={enteredLastName || ""}
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
                  value={enteredDob || ""}
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
                  value={enteredCourse || ""}
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
                  value={enteredUsername || ""}
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
                  value={enteredEmail || ""}
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

              <div className={styles.warningMessage}>{alertMessage}</div>
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
