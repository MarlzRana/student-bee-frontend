import styles from "../styling/Search.module.css";

function Search() {
    return (
        <div className={styles.searchContainer}>
            <form className={styles.searchBar}>
                <input 
                    className={styles.searchInput}
                    id="search"
                    name="search"
                    type="search"
                    placeholder="Search..."
                    required
                />
                <button 
                    className={styles.searchButton} 
                    type="submit"
                >
                    <i className={styles.searchIcon}></i>
                </button>
            </form>
        </div>    
    );
}

export default Search;