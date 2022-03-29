import styles from "./JobSearch.module.css";
import { Suspense, lazy } from 'react';

function JobSearch () {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className={styles.jobSearchPage}>
                <div className={styles.searchBarArea}>
                    test
                </div>
                <div className={styles.searchResults}>
                    <div className={styles.searchResultsContainer}>
                        <ul>
                            {/* Search results go here */}
                            <li>test</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Suspense>
    );
}

export default JobSearch;