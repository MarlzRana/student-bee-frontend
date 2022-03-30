import styles from "../styling/Search.module.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Search() {
    const [address, setAddress] = useState("/mainApp/societySearch");
    return (
        <div className={styles.searchContainer}>
            <form className={styles.searchBar}>
                <input 
                    className={styles.searchInput}
                    id="search"
                    name="search"
                    type="search"
                    placeholder="Search..."
                    onChange={(e) => setAddress("/mainApp/societySearch/" + e.target.value)}
                    required
                />
                <Link to={address}>
                    <button 
                        className={styles.searchButton} 
                        type="submit"
                    >
                        <i className={styles.searchIcon}></i>
                    </button>
                </Link>
            </form>
        </div>    
    );
}

export default Search;