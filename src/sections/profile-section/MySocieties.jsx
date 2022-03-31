import styles from "./MySections.module.css";
import { Suspense, lazy, useState, useEffect } from "react";
import placeholder from "../events-page/styling/bg.jpg";
import pic from "./components/DefaultProfilePic.jpg";
import Axios from "axios";

const Content = lazy(() => import("./components/Content"));

function MySocieties() {
  const [myRelevantSocieties, setMyRelevantSocieties] = useState([]);
  const [joinedAnyYet, setJoinedAnyYet] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  useEffect(() => {
    try {
      const fetchSocieties = async () => {
        Axios.defaults.withCredentials = true;
        const res = await Axios.get(
          process.env.REACT_APP_APIHOSTADDRESS + "/societiesSystem/mySocieties"
        );
        if (res.data.status === "failure") {
          window.confirm("Something went wrong. Please try again later.");
        } else if (res.data.status === "success") {
          if (res.data.societies.length > 0) {
            setJoinedAnyYet(true);
          }
          setMyRelevantSocieties(res.data.societies);
        }
      };
      fetchSocieties();
      const fetchName = async () => {
        Axios.defaults.withCredentials = true;
        const res = await Axios.get(
          process.env.REACT_APP_APIHOSTADDRESS +
            "/loginSystem/getCurrentUsername"
        );
        if (res.data.status === "failure") {
          return;
        } else if (res.data.status === "success") {
          const payload = { username: res.data.username };
          const res2 = await Axios.post(
            process.env.REACT_APP_APIHOSTADDRESS +
              "/loginSystem/getPersonalInformation",
            payload
          );
          if (res2.data.status === "failure") {
          } else if (res2.data.status === "success") {
            setFirstName(res2.data.userInformation.firstName);
            setLastName(res2.data.userInformation.lastName);
          }
        }
      };
      fetchName();
    } catch (error) {
      window.confirm("Something went wrong. Please try again later.");
    }
  }, []);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.mySectionPage}>
        <div className={styles.myHeader}>
          <img src={pic} alt="" />
          <h1>
            {firstName} {lastName}
          </h1>
        </div>
        <h2>My Societies</h2>
        <div className={styles.myContainer}>
          {myRelevantSocieties.map((society, index) => {
            if (joinedAnyYet) {
              return (
                <Content
                  contentType="society"
                  contentBg={placeholder}
                  contentID={society.societyID}
                  key={index}
                />
              );
            } else {
              <p>You have not created or joined any societies yet</p>;
            }
          })}
        </div>
      </div>
    </Suspense>
  );
}

export default MySocieties;
