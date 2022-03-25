import styles from "./Societies.module.css";
import { Suspense, lazy, useState, useEffect } from "react";
import img from "./styling/placeholder2.jpg";
import Axios from "axios";

const Society = lazy(() => import("./components/Society"));
const AddSocietyWidget = lazy(() => import("./components/AddSocietyWidget"));

function Societies() {
  const [isAddSocietyWidgetShowing, setIsAddSocietyWidgetShowing] =
    useState(false);
  const [tenRandomSocieties, setTenRandomSocieties] = useState([]);
  useEffect(() => {
    const fetchSocieties = async () => {
      Axios.defaults.withCredentials = true;
      const res = await Axios.get(
        process.env.REACT_APP_APIHOSTADDRESS +
          "/societiesSystem/10RandomSocieties"
      );
      if (res.data.status === "failure") {
        window.confirm("Something went wrong. Please try again later.");
      }
      console.log(res.data.returnObjects);
      setTenRandomSocieties(res.data.returnObjects);
      console.log(tenRandomSocieties);
    };
    fetchSocieties();
  }, []);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.societiesPage}>
        <div className={styles.societiesHeading}>
          <h1>Societies</h1>
          <p>Enhance your university experience!</p>
        </div>
        <div className={styles.societiesContainer}>
          {tenRandomSocieties.map((event, index) => {
            return (
              <Society
                societyID={event.societyID}
                societyName={event.societyName}
                societyImage={img}
                key={index}
              />
            );
          })}
        </div>
        {isAddSocietyWidgetShowing ? (
          <AddSocietyWidget
            setIsAddSocietyWidgetShowing={setIsAddSocietyWidgetShowing}
          />
        ) : (
          <></>
        )}
        {!isAddSocietyWidgetShowing ? (
          <button
            title="Add your own society!"
            onClick={() => setIsAddSocietyWidgetShowing(true)}
            className={styles.addSociety}
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

export default Societies;
