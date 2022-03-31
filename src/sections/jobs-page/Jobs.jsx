import styles from "./Jobs.module.css";
import { Suspense, lazy, useState, useEffect } from "react";
import jobPicCollection from "./components/jobPicCollection";
import Axios from "axios";

const JobWidget = lazy(() => import("./components/JobWidget"));
const AddJobWidget = lazy(() => import("./components/AddJobWidget"));
const Search = lazy(() => import("./components/Search"));

function Jobs() {
  const [isAddJobWidgetShowing, setIsAddJobWidgetShowing] = useState(false);

  const [eightRandomJobs, setEightRandomJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      Axios.defaults.withCredentials = true;
      const res = await Axios.get(
        process.env.REACT_APP_APIHOSTADDRESS + "/jobsSystem/8RandomJobs"
      );
      if (res.data.status === "failure") {
        window.confirm("Something went wrong. Please try again later.");
      }
      setEightRandomJobs(res.data.events);
    };
    fetchJobs();
  }, []);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.jobsPage}>
        <h1>Jobs</h1>
        <p>A chance to develop your skills.</p>
        <div className={styles.searchContainer}><Search /></div>
        <div className={styles.jobsContainer}>
          <JobWidget jobImage={jobPicCollection[(Math.floor(Math.random() * jobPicCollection.length))]}/>
          <JobWidget jobImage={jobPicCollection[(Math.floor(Math.random() * jobPicCollection.length))]}/>
          <JobWidget jobImage={jobPicCollection[(Math.floor(Math.random() * jobPicCollection.length))]}/>
          <JobWidget jobImage={jobPicCollection[(Math.floor(Math.random() * jobPicCollection.length))]}/>
          <JobWidget jobImage={jobPicCollection[(Math.floor(Math.random() * jobPicCollection.length))]}/>
          <JobWidget jobImage={jobPicCollection[(Math.floor(Math.random() * jobPicCollection.length))]}/>
          
          {eightRandomJobs.map((job, index) => {
            return (
              <JobWidget
                jobID={job.jobID}
                jobTitle={job.jobTitle}
                jobImage={jobPicCollection[(Math.floor(Math.random() * jobPicCollection.length))]}
                wage={job.wage}
                hoursPerWeek={job.workingHours}
                location={job.location}
                startDate={job.startDate}
                key={index}
              />
            );
          })}
        </div>
        {isAddJobWidgetShowing ? (
          <AddJobWidget setIsAddJobWidgetShowing={setIsAddJobWidgetShowing} />
        ) : (
          <></>
        )}
        {!isAddJobWidgetShowing ? (
          <button
            title="Add a new job!"
            onClick={() => setIsAddJobWidgetShowing(true)}
            className={styles.addJob}
          >
            +
          </button>
        ) : (
          <></>
        )}
      </div>
    </Suspense>
  );
}

export default Jobs;
