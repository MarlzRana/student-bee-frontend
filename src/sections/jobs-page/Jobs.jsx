import styles from "./Jobs.module.css";
import { Suspense, lazy, useState } from 'react';
import placeholderImg from "./components/defaultJobsPic.jpg";

const JobWidget = lazy(() => import("./components/JobWidget"));
const AddJobWidget = lazy(() => import("./components/AddJobWidget"));

function Jobs() {
  const [isAddJobWidgetShowing, setIsAddJobWidgetShowing] = useState(false);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.jobsPage}>
        <h1>Jobs</h1>
        <p>A chance to develop your skills.</p>
        <div className={styles.jobsContainer}>
          <JobWidget jobTitle={"Chef"} jobImage={placeholderImg} wage={"100"} hoursPerWeek={"XX"} location={"placeholder"} startDate={"dd/mm/yyyy"}/>
          <JobWidget jobTitle={"Chef"} jobImage={placeholderImg} wage={"100"} hoursPerWeek={"XX"} location={"placeholder"} startDate={"dd/mm/yyyy"}/>
          <JobWidget jobTitle={"Chef"} jobImage={placeholderImg} wage={"100"} hoursPerWeek={"XX"} location={"placeholder"} startDate={"dd/mm/yyyy"}/>
          <JobWidget jobTitle={"Chef"} jobImage={placeholderImg} wage={"100"} hoursPerWeek={"XX"} location={"placeholder"} startDate={"dd/mm/yyyy"}/>
          <JobWidget jobTitle={"Chef"} jobImage={placeholderImg} wage={"100"} hoursPerWeek={"XX"} location={"placeholder"} startDate={"dd/mm/yyyy"}/>
          <JobWidget jobTitle={"Chef"} jobImage={placeholderImg} wage={"100"} hoursPerWeek={"XX"} location={"placeholder"} startDate={"dd/mm/yyyy"}/>
          <JobWidget jobTitle={"Chef"} jobImage={placeholderImg} wage={"100"} hoursPerWeek={"XX"} location={"placeholder"} startDate={"dd/mm/yyyy"}/>
          <JobWidget jobTitle={"Chef"} jobImage={placeholderImg} wage={"100"} hoursPerWeek={"XX"} location={"placeholder"} startDate={"dd/mm/yyyy"}/>
        </div>
        {isAddJobWidgetShowing ? (
        <AddJobWidget
            setIsAddJobWidgetShowing={setIsAddJobWidgetShowing}
        />
        ) : (
            <></>
        )}
        {!isAddJobWidgetShowing ? (<button
            title='Add your own society!'
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
  )
}

export default Jobs;