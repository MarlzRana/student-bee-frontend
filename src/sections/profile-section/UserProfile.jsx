import styles from "./UserProfile.module.css";
import { Suspense, lazy, useState, useEffect } from "react";
import DefaultProfilePic from "./components/DefaultProfilePic.png";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";

function UserProfile() {
  const username = useParams().username;
  const [userInformation, setUserInformation] = useState("");

  const routerNavigator = useNavigate();
  useEffect(() => {
    Axios.defaults.withCredentials = true;
    console.log("Are we even reaching here?");
    const fetchUserDetails = async () => {
      console.log(username);
      const payload = {
        username: username,
      };
      console.log("Payload: ");
      console.log(payload);

      await Axios.post(
        process.env.REACT_APP_APIHOSTADDRESS +
          "/loginSystem/getPersonalInformation",
        payload
      )
        .then(function (res) {
          console.log(res);
          if (res.data.status === "failure") {
            if (res.data.reason === "notLoggedIn") {
              routerNavigator("/loginSystem/login");
            }
            if (
              res.data.reason === "This username does not exist" ||
              res.data.reason === "Invalid username format"
            ) {
              routerNavigator("/mainApp/home");
              window.confirm(res.data.reason);
            }
          } else if (res.data.status === "success") {
            setUserInformation(res.data.userInformation);
          }
        })
        .catch(function (error) {
          return;
        });
    };
    fetchUserDetails();
  }, []);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.userPage}>
        <div className={styles.coverPic}></div>
        <div className={styles.userDetails}>
          <img src={DefaultProfilePic} alt="Profile Pic" />
          <h1>
            {userInformation.firstName} {userInformation.lastName}
          </h1>
          <p>
            {userInformation.studentYear} Year, {userInformation.courseName}
          </p>
          <br />
          <div className={styles.userDescription}>
            <h2>About Me</h2>
            <p>{userInformation.bio}</p>
          </div>
          <br />
        </div>
      </div>
    </Suspense>
  );
}

export default UserProfile;
