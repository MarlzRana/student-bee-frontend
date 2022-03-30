import styles from "./JobSearch.module.css";
import { Suspense, lazy, useEffect, useState } from "react";
import Axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const SearchResult = lazy(() => import("./components/SearchResult"));

function JobSearch() {
  const routerNavigator = useNavigate();
  const query = useParams().result;
  const [newQuery, setNewQuery] = useState("");
  console.log("Query:");
  console.log(query);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    try {
      const fetchResults = async () => {
        Axios.defaults.withCredentials = true;
        const payload = {
          query: query,
        };
        console.log("just before the post request");
        const res = await Axios.post(
          process.env.REACT_APP_APIHOSTADDRESS + "/jobsSystem/search",
          payload
        );
        if (res.data.status === "failure") {
          if (res.data.reason === "notLoggedIn") {
            routerNavigator("/loginSystem/login");
          }
          console.log("res.data.status = failure");
          console.log(res);
        } else {
          console.log(res.data);
          setSearchResults(res.data);
          console.log("setSearchResults called");
        }
      };
      fetchResults();
    } catch (error) {
      console.log("Total error");
      console.log(error);
      window.confirm("Something went wrong. Please try again later.");
      routerNavigator("/mainApp/jobs");
    }
  }, [query]);

  const search = async (e) => {
    e.preventDefault();
    try {
      const destination = "/mainApp/jobSearch/" + newQuery;
      routerNavigator(destination);
    } catch (error) {
      window.confirm("Something went wrong. Please try again later.");
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.jobSearchPage}>
        <div className={styles.searchBarArea}>
          <div className={styles.searchHeader}>
            <h1>Job Search</h1>
            <i className={styles.searchIcon}></i>
          </div>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setNewQuery(e.target.value)}
            />
            <button
              className={styles.searchButton}
              type="submit"
              onClick={(e) => search(e)}
            >
              <i className={styles.searchIcon}></i>
            </button>
          </div>
        </div>
        <div className={styles.searchResults}>
          <div className={styles.searchResultsContainer}>
            {searchResults.map((job, index) => {
              return (
                <SearchResult
                  jobTitle={job.jobTitle}
                  wage={job.wage}
                  hours={job.workingHours}
                  location={job.location}
                  startDate={job.startDate}
                  jobID={job.jobID}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default JobSearch;
