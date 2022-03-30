import styles from "./JobDetails.module.css";
import { useEffect, useState, Suspense, lazy } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";

const DeleteConfirm = lazy(() => import("./components/DeleteConfirm"));
const EditJob = lazy(() => import("./components/EditJob"));

function JobDetails() {
  const [isEditJobShowing, setIsEditJobShowing] = useState(false);
  const [isConfirmDeleteShowing, setIsConfirmDeleteShowing] = useState(false);
  const jobIDIn = useParams().jobID;
  const [jobInfo, setJobInfo] = useState("");
  const [isOwnedByUser, setIsOwnedByUser] = useState(false);
  const routerNavigator = useNavigate();
  useEffect(() => {
    Axios.defaults.withCredentials = true;

    Axios.defaults.withCredentials = true;

    const doesUserOwnJob = async () => {
      const payload = {
        jobID: jobIDIn,
      };

      await Axios.post(
        process.env.REACT_APP_APIHOSTADDRESS + "/jobsSystem/ownsJob",
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
              routerNavigator("/mainApp/jobs");
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
    doesUserOwnJob();

    const fetchJobDetails = async () => {
      const payload = {
        jobID: jobIDIn,
      };

      await Axios.post(
        process.env.REACT_APP_APIHOSTADDRESS + "/jobsSystem/getJobDetails",
        payload
      )
        .then(function (res) {
          console.log(res);
          if (res.data.status === "failure") {
            if (res.data.reason === "notLoggedIn") {
              routerNavigator("/loginSystem/login");
            }
            if (
              res.data.reason === "This society does not exist" ||
              res.data.reason === "Invalid ID format"
            ) {
              routerNavigator("/mainApp/jobs");
              window.confirm(res.data.reason);
            }
          } else if (res.data.status === "success") {
            setJobInfo(res.data.jobInformation);
          }
        })
        .catch(function (error) {
          return;
        });
    };
    fetchJobDetails();
  }, []);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.details}>
        <div className={styles.banner}>
          <div className={styles.bannerText}>
            <h1>{jobInfo.jobTitle}</h1>
            <p>Start Date : {jobInfo.startDate}</p>
            <button>Apply Now</button>
          </div>
        </div>
        <div className={styles.jobDesc}>
          <div className={styles.info}>
            <h2>Job Description and Requirements</h2>
            <p>{jobInfo.description}</p>
          </div>
          <div className={styles.contact}>
            <div className={styles.buttonGroup}>
              {isOwnedByUser ? (
                <button
                  onClick={() => setIsEditJobShowing(true)}
                  className={styles.editJobButton}
                >
                  Edit Details
                </button>
              ) : (
                <></>
              )}

              {isOwnedByUser ? (
                <button
                  onClick={() => setIsConfirmDeleteShowing(true)}
                  className={styles.deleteJobButton}
                >
                  Delete Job
                </button>
              ) : (
                <></>
              )}
            </div>
            <h2>Contacts</h2>
            <br />
            <ul>
              <li>{jobInfo.applicationLink}</li>
            </ul>
          </div>
        </div>
        {isEditJobShowing ? (
          <EditJob setIsEditJobShowing={setIsEditJobShowing} jobID={jobIDIn} />
        ) : (
          <></>
        )}
        {isConfirmDeleteShowing ? (
          <DeleteConfirm
            setIsConfirmDeleteShowing={setIsConfirmDeleteShowing}
            jobID={jobIDIn}
          />
        ) : (
          <></>
        )}
      </div>
    </Suspense>
  );
}

export default JobDetails;
