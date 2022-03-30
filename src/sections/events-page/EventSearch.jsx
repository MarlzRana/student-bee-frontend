import styles from "./EventSearch.module.css";
import { Suspense, lazy } from 'react';

const SearchResult = lazy(() => import("./components/SearchResult"));

function EventSearch () {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className={styles.eventSearchPage}>
                <div className={styles.searchBarArea}>
                    <div className={styles.searchHeader}>
                        <h1>Event Search</h1>
                    </div>
                    <form className={styles.searchBar}>
                        <input 
                            type="text" 
                            placeholder="Search..."
                            // onChange={}
                        />
                        <button 
                            className={styles.searchButton} 
                            type="submit"
                        >
                            <i className={styles.searchIcon}></i>
                        </button>
                    </form>
                </div>
                <div className={styles.searchResults}>
                    <div className={styles.searchResultsContainer}>
                        {/* Search results go here */}
                        <SearchResult />
                        <SearchResult />
                        <SearchResult />
                        <SearchResult />
                    </div>
                </div>
            </div>
        </Suspense>
    );
}

export default EventSearch;