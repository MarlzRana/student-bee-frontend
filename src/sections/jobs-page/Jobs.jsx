
import styles from "./Jobs.module.css";

import { Suspense, lazy } from 'react';
const JobWidget = lazy(() => import("./components/JobWidget"));
function Jobs() {
  return (
    <div><JobWidget jobTitle={"Chef"} jobImage={""} salary={"100"} requirements={["Good haircut", "Mad skills"]}/></div>
  )
}

export default Jobs