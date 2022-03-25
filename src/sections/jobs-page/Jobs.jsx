import styles from "./Jobs.module.css";
import { Suspense, lazy } from 'react';

const JobWidget = lazy(() => import("./components/JobWidget"));

function Jobs() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.jobsPage}>
        <h1>looking good fam</h1>
        <div className={styles.jobsContainer}>
          <JobWidget jobTitle={"Chef"} jobImage={""} wage={"100"} hoursPerWeek={""} location={""} startDate={""}/>
          <JobWidget jobTitle={"Chef"} jobImage={""} wage={"100"} hoursPerWeek={""} location={""} startDate={""}/>
          <JobWidget jobTitle={"Chef"} jobImage={""} wage={"100"} hoursPerWeek={""} location={""} startDate={""}/>
          <JobWidget jobTitle={"Chef"} jobImage={""} wage={"100"} hoursPerWeek={""} location={""} startDate={""}/>
          <JobWidget jobTitle={"Chef"} jobImage={""} wage={"100"} hoursPerWeek={""} location={""} startDate={""}/>
          <JobWidget jobTitle={"Chef"} jobImage={""} wage={"100"} hoursPerWeek={""} location={""} startDate={""}/>
          <JobWidget jobTitle={"Chef"} jobImage={""} wage={"100"} hoursPerWeek={""} location={""} startDate={""}/>
          <JobWidget jobTitle={"Chef"} jobImage={""} wage={"100"} hoursPerWeek={""} location={""} startDate={""}/>
        </div>
      </div>
    </Suspense>
  )
}

export default Jobs;