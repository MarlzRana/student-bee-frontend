import styles from "../MySections.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Content({ contentType, contentBg, contentID }) {
  const routerNavigator = useNavigate();
  const [contentTitle, setContentTitle] = useState("");
  const [destination, setDestination] = useState("/mainApp/home");
  useEffect(() => {
    try {
      if (!(contentID === "" || contentID === null)) {
        if (contentType === "event") {
          const payload = {
            eventID: contentID,
          };
          const fetchEventDetails = async () => {
            Axios.defaults.withCredentials = true;
            const res = await Axios.post(
              process.env.REACT_APP_APIHOSTADDRESS +
                "/eventsSystem/getEventDetails",
              payload
            );
            if (res.data.status === "failure") {
              window.confirm("Something went wrong. Please try again later.");
              routerNavigator("/mainApp/home");
            }
            setContentTitle(res.data.eventInformation.title);
            setDestination("/mainApp/events/viewEvent/" + contentID);
          };
          fetchEventDetails();
        } else if (contentType === "society") {
          const payload = {
            societyID: contentID,
          };
          const fetchSocietyDetails = async () => {
            Axios.defaults.withCredentials = true;
            const res = await Axios.post(
              process.env.REACT_APP_APIHOSTADDRESS +
                "/societiesSystem/getSocietyDetails",
              payload
            );
            if (res.data.status === "failure") {
              window.confirm("Something went wrong. Please try again later.");
              routerNavigator("/mainApp/home");
            }
            console.log(res);
            setContentTitle(res.data.societyInformation.title);
            setDestination("/mainApp/societyDetails/" + contentID);
          };
          fetchSocietyDetails();
        }
      }
    } catch (error) {
      window.confirm("Something went wrong. Please try again later.");
      routerNavigator("/mainApp/home");
    }
  }, []);
  return (
    <div className={styles.contentCircle}>
      <Link className={styles.contentRedirect} to={destination}>
        <img className={styles.contentImg} src={contentBg} alt={contentTitle} />
        <div className={styles.contentTitle}>{contentTitle}</div>
      </Link>
    </div>
  );
}

export default Content;
