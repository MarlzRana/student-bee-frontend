import { React, useState } from "react";
import styles from "../styling/DeleteConfirm.module.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function DeleteConfirm({ setIsConfirmDeleteShowing, societyID }) {
  const routerNavigator = useNavigate();
  const deleteSociety = async (e) => {
    e.preventDefault();
    const payload = {
      societyID: societyID,
    };
    console.log(payload);
    try {
      const res = await Axios.post(
        process.env.REACT_APP_APIHOSTADDRESS + "/societiesSystem/deleteSociety",
        payload
      );
      if (res.data.status === "success") {
        console.log(res);
        routerNavigator("/mainApp/societies");
        console.log("success");
      }
      if (res.data.status === "failure") {
        console.log(res);
        window.confirm("Something went wrong. Please try again later.");
        console.log("failure");
      }
    } catch (error) {
      window.confirm("Something went wrong. Please try again later.");
    }
  };
  return (
    <div className={styles.background}>
      <div className={styles.deletePopUp}>
        <header className={styles.header}>
          <h1>Are you sure?</h1>
        </header>
        <p>Warning! Deletion is irreversible</p>
        <form className={styles.formDelete}>
          <div className={styles.confirmDelete}>
            <input
              type="submit"
              name="confirmDelete"
              value="Yes"
              onClick={(e) => deleteSociety(e)}
            />
            <button onClick={() => setIsConfirmDeleteShowing(false)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DeleteConfirm;
