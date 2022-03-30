import styles from "./SocietyDetails.module.css";
import pic from "../profile-section/components/DefaultProfilePic.jpg";
import { Suspense, lazy, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";

const SocietyMember = lazy(() => import("./components/SocietyMember"));
const EditSociety = lazy(() => import("./components/EditSociety"));
const DeleteConfirm = lazy(() => import("./components/DeleteConfirm"));

function SocietyDetails() {
  const [isEditSocietyShowing, setIsEditSocietyShowing] = useState(false);
  const [isConfirmDeleteShowing, setIsConfirmDeleteShowing] = useState(false);
  const societyIDIn = parseInt(useParams().societyID);
  const [societyInfo, setSocietyInfo] = useState("");
  const [isOwnedByUser, setIsOwnedByUser] = useState(false);
  const [isUserParticipating, setIsUserParticipating] = useState(false);
  const [joinButtonMessage, setJoinButtonMessage] = useState("Join Event");
  const routerNavigator = useNavigate();
  useEffect(() => {
    Axios.defaults.withCredentials = true;

    const doesUserOwnSociety = async () => {
      const payload = {
        societyID: societyIDIn,
      };

      await Axios.post(
        process.env.REACT_APP_APIHOSTADDRESS + "/societiesSystem/ownsSociety",
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
              routerNavigator("/mainApp/societies");
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
    doesUserOwnSociety();

    const fetchSocietyDetails = async () => {
      console.log(societyIDIn);
      const payload = {
        societyID: societyIDIn,
      };

      await Axios.post(
        process.env.REACT_APP_APIHOSTADDRESS +
          "/societiesSystem/getSocietyDetails",
        payload
      )
        .then(function (res) {
          if (res.data.status === "failure") {
            if (res.data.reason === "notLoggedIn") {
              routerNavigator("/loginSystem/login");
            }
            if (
              res.data.reason === "This society does not exist" ||
              res.data.reason === "Invalid ID format"
            ) {
              routerNavigator("/mainApp/societies");
              window.confirm(res.data.reason);
            }
          } else if (res.data.status === "success") {
            setSocietyInfo(res.data.societyInformation);
          }
        })
        .catch(function (error) {
          return;
        });
    };
    fetchSocietyDetails();

    const checkIfAlreadyMember = async () => {
      const payload = {
        societyID: societyIDIn,
      };

      await Axios.post(
        process.env.REACT_APP_APIHOSTADDRESS +
          "/societiesSystem/isUserPartOfSociety",
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
              routerNavigator("/mainApp/societies");
              window.confirm(res.data.reason);
            }
          } else if (res.data.status === "success") {
            console.log("User participating: ");
            console.log(res.data.reason.userIsPartOfSociety);
            if (res.data.reason.userIsPartOfSociety) {
              setJoinButtonMessage("Leave Society");
            } else {
              setJoinButtonMessage("Join Society");
            }
            setIsUserParticipating(res.data.reason.userIsPartOfSociety);
          }
        })
        .catch(function (error) {
          return;
        });
    };
    checkIfAlreadyMember();
  }, []);

  const joinLeaveSociety = async (e) => {
    e.preventDefault();
    const payload = {
      societyID: societyIDIn,
    };
    try {
      const res = await Axios.post(
        process.env.REACT_APP_APIHOSTADDRESS +
          "/societiesSystem/invertIsUserPartOfSociety",
        payload
      );
      if (res.data.status === "success") {
        if (res.data.reason === "userParticipationDeleted") {
          setIsUserParticipating(false);
          setJoinButtonMessage("Join Society");
        } else if (res.data.reason === "userParticipationAdded") {
          setIsUserParticipating(true);
          setJoinButtonMessage("Leave Society");
        }
      }
      if (res.data.status === "failure") {
        if (res.data.reason === "invalidInputFormat") {
          console.log(res);
        }
      }
    } catch (error) {
      window.confirm("Something went wrong. Please try again later.");
    }
  };
  return (
    <Suspense>
      <div className={styles.societyDetails}>
        <div className={styles.societyBanner}>
          <div className={styles.societyBannerText}>
            <h1>{societyInfo.title}</h1>
          </div>
        </div>
        <div className={styles.societyMembers}>
          <h2>Members</h2>
          <ul>
            <li>
              <SocietyMember
                profilePic={pic}
                firstName={societyInfo.leaderName}
                lastName=""
              />
            </li>
          </ul>
        </div>
        <div className={styles.societyDesc}>
          <div className={styles.societyInfo}>
            <p>{societyInfo.description}</p>
          </div>
          <div className={styles.societyLinks}>
            <div className={styles.buttonGroup}>
              {isOwnedByUser ? (
                <button
                  onClick={() => setIsEditSocietyShowing(true)}
                  className={styles.editSocietyButton}
                >
                  Edit Details
                </button>
              ) : (
                <button
                  onClick={(e) => joinLeaveSociety(e)}
                  className={styles.editSocietyButton}
                >
                  {joinButtonMessage}
                </button>
              )}

              {isOwnedByUser ? (
                <button
                  onClick={() => setIsConfirmDeleteShowing(true)}
                  className={styles.deleteSocietyButton}
                >
                  Delete Society
                </button>
              ) : (
                <></>
              )}
            </div>
            <h2>Links</h2>
            <ul>
              <li>{societyInfo.contactLinks}</li>
            </ul>
          </div>
        </div>
        {isEditSocietyShowing ? (
          <EditSociety
            setIsEditSocietyShowing={setIsEditSocietyShowing}
            societyID={societyIDIn}
          />
        ) : (
          <></>
        )}
        {isConfirmDeleteShowing ? (
          <DeleteConfirm
            setIsConfirmDeleteShowing={setIsConfirmDeleteShowing}
            societyID={societyIDIn}
          />
        ) : (
          <></>
        )}
      </div>
    </Suspense>
  );
}

export default SocietyDetails;
