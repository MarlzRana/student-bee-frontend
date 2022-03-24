import styles from "./EventDetails.module.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";

function EventDetails() {
  const eventIDIn = useParams().eventID;
  const [eventInfo, setEventInfo] = useState("");
  const routerNavigator = useNavigate();
  useEffect(() => {
    //Abort controller
    const abortCont = new AbortController();

    const fetchEventDetails = async () => {
      await Axios.get(
        process.env.REACT_APP_APIHOSTADDRESS +
          "/eventsSystem/getEventDetails/" +
          eventIDIn,
        { signal: abortCont.signal }
      )
        .then(function (res) {
          if (res.data.status === "failure") {
            if (
              res.data.reason === "This event does not exist" ||
              res.data.reason === "Invalid ID format"
            ) {
              console.log("Invalid");
              routerNavigator("/mainApp/events");
            }
          }
          console.log(res);
          setEventInfo(res.data.eventInformation);
        })
        .catch(function (error) {
          return;
        });
    };
    fetchEventDetails();

    Axios.defaults.withCredentials = true;
    const checkIsUserLogged = async () => {
      const res = await Axios.get(
        process.env.REACT_APP_APIHOSTADDRESS + "/loginSystem/isLoggedIn"
      );
      if (res.data.isLoggedIn === false) {
        routerNavigator("/loginSystem/login");
      }
    };
    checkIsUserLogged();

    //Cleanup function
    return () => abortCont.abort();
  }, [routerNavigator]);
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
