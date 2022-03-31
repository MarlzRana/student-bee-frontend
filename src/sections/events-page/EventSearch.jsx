import styles from "./EventSearch.module.css";
import { Suspense, lazy, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Axios from "axios";

const SearchResult = lazy(() => import("./components/SearchResult"));

function EventSearch() {
  const routerNavigator = useNavigate();
  const query = useParams().result;
  const [newQuery, setNewQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    try {
      const fetchResults = async () => {
        Axios.defaults.withCredentials = true;
        const payload = {
          query: query,
        };
        const res = await Axios.post(
          process.env.REACT_APP_APIHOSTADDRESS + "/eventsSystem/search",
          payload
        );
        if (res.data.status === "failure") {
          if (res.data.reason === "notLoggedIn") {
            routerNavigator("/loginSystem/login");
          }
        } else {
          setSearchResults(res.data);
        }
      };
      fetchResults();
    } catch (error) {
      window.confirm("Something went wrong. Please try again later.");
      routerNavigator("/mainApp/events");
    }
  }, [query]);

  const search = async (e) => {
    e.preventDefault();
    try {
      const destination = "/mainApp/eventSearch/" + newQuery;
      routerNavigator(destination);
    } catch (error) {
      window.confirm("Something went wrong. Please try again later.");
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.eventSearchPage}>
        <div className={styles.searchBarArea}>
          <div className={styles.searchHeader}>
            <h1>Event Search</h1>
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
            {searchResults.map((event, index) => {
              return (
                <SearchResult
                  title={event.title}
                  startDateTime={event.startDatetime}
                  endDateTime={event.endDatetime}
                  location={event.location}
                  eventID={event.eventID}
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

export default EventSearch;
