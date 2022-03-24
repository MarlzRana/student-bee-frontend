import styles from "./EventDetails.module.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";

function EventDetails() {
  const eventIDIn = parseInt(useParams().eventID);
  const [eventInfo, setEventInfo] = useState("");
  const routerNavigator = useNavigate();
  useEffect(() => {
    Axios.defaults.withCredentials = true;

    const fetchEventDetails = async () => {
      console.log(eventIDIn);
      const payload = {
        eventID: eventIDIn,
      };

      await Axios.post(
        process.env.REACT_APP_APIHOSTADDRESS + "/eventsSystem/getEventDetails",
        payload
      )
        .then(function (res) {
          if (res.data.status === "failure") {
            if (res.data.reason === "notLoggedIn") {
              routerNavigator("/loginSystem/login");
            }
            if (
              res.data.reason === "This event does not exist" ||
              res.data.reason === "Invalid ID format"
            ) {
              routerNavigator("/mainApp/events");
              window.confirm(res.data.reason);
            }
          } else if (res.data.status === "success") {
            setEventInfo(res.data.eventInformation);
          }
          console.log(res);
        })
        .catch(function (error) {
          return;
        });
    };
    fetchEventDetails();
  }, []);
  return (
    <div className={styles.details}>
      <div className={styles.banner}>
        <div className={styles.bannerText}>
          <h1>{eventInfo.title}</h1>
          <p>{eventInfo.startDateTime}</p>
        </div>
      </div>
      <div className={styles.eventDesc}>
        <div className={styles.info}>
          <p>{eventInfo.description}</p>
        </div>
        <div className={styles.contact}>
          <h2>Contacts</h2>
          <ul>
            <li>{eventInfo.contactEmail}</li>
            <li>{eventInfo.contactPhoneNumber}</li>
          </ul>
          <br />
          <h2>Organisers</h2>
          <ul>
            <li>{eventInfo.organizerName}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
