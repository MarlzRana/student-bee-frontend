import styles from "./SocietyDetails.module.css";
import pic from "../profile-section/components/DefaultProfilePic.jpg";
import { Suspense, lazy, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";

const SocietyMember = lazy(() => import("./components/SocietyMember"));

function SocietyDetails() {
  const societyIDIn = parseInt(useParams().societyID);
  const [societyInfo, setSocietyInfo] = useState("");
  const routerNavigator = useNavigate();
  useEffect(() => {
    Axios.defaults.withCredentials = true;

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
            console.log("success");
          }
          console.log(res);
        })
        .catch(function (error) {
          return;
        });
    };
    fetchSocietyDetails();
  }, []);
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
            <h2>Links</h2>
            <ul>
              <li>{societyInfo.contactLinks}</li>
            </ul>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default SocietyDetails;
