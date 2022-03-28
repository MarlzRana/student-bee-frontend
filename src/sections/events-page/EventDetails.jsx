import styles from "./EventDetails.module.css";
import { useState, useEffect, Suspense, lazy } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";

const EditEvent = lazy(() => import("./components/EditEvent"));
const DeleteConfirm = lazy(() => import("./components/DeleteConfirm"));

function EventDetails() {
  const [isEditEventShowing, setIsEditEventShowing] = useState(false);
  const [isConfirmDeleteShowing, setIsConfirmDeleteShowing] = useState(false);
  const eventIDIn = parseInt(useParams().eventID);
  const [eventInfo, setEventInfo] = useState("");
  const [isOwnedByUser, setIsOwnedByUser] = useState(false);
  const routerNavigator = useNavigate();
  useEffect(() => {
    Axios.defaults.withCredentials = true;

    const doesUserOwnEvent = async () => {
      const payload = {
        eventID: eventIDIn,
      };

      await Axios.post(
        process.env.REACT_APP_APIHOSTADDRESS + "/eventsSystem/ownsEvent",
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
            setIsOwnedByUser(res.data.owned);
          }
        })
        .catch(function (error) {
          return;
        });
    };
    doesUserOwnEvent();

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
        })
        .catch(function (error) {
          return;
        });
    };
    fetchEventDetails();
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
            {isOwnedByUser ? (
              <button
                onClick={() => setIsEditEventShowing(true)}
                className={styles.editEventButton}
              >
                Edit Details
              </button>
            ) : (
              <></>
            )}

            {isOwnedByUser ? (
              <button
                onClick={() => setIsConfirmDeleteShowing(true)}
                className={styles.deleteEventButton}
              >
                Delete Event
              </button>
            ) : (
              <></>
            )}

            <br />
            <h2>Contacts</h2>
            <ul>
              <li>{eventInfo.contactEmail}</li>
              <li>{eventInfo.contactPhoneNumber}</li>
            </ul>
            <br />
            <h2>Organiser</h2>
            <ul>
              <li>{eventInfo.organizerName}</li>
            </ul>
          </div>
        </div>
        {isConfirmDeleteShowing ? (
          <DeleteConfirm
            setIsConfirmDeleteShowing={setIsConfirmDeleteShowing}
          />
        ) : (
          <></>
        )}
        {isEditEventShowing ? (
          <EditEvent
            setIsEditEventShowing={setIsEditEventShowing}
            eventID={eventIDIn}
          />
        ) : (
          <></>
        )}
      </div>
    </Suspense>
  );
}

export default EventDetails;
