import styles from "./SocietySearch.module.css";
import { Suspense, lazy } from 'react';

const SearchResult = lazy(() => import("./components/SearchResult"));

function SocietySearch () {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className={styles.societySearchPage}>
                <div className={styles.searchBarArea}>
                    <div className={styles.searchHeader}>
                        <h1>Society Search</h1>
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

export default SocietySearch;