import React from 'react';
import Logo from '../common/Logo/Logo';
import Search from '../Search/Search';
import Button from '../common/Button/Button';
import MovieOverview from '../MovieOverview/MovieOverview';

import styles from './Header.css';
import btnStyles from '../common/Button/Button.css';

const Header = function(props) {
    return(
    <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.row}>
                <Logo url="/">Netflixroulette</Logo>
                {props.view !== "startPage" && 
                    <Button type="button" className={`${btnStyles.small} ${btnStyles.pullRight}`}>Search</Button>
                }
            </div>
            <div className={styles.row}>
                {props.view === "startPage" && 
                    <Search 
                        action={props.action} 
                        filterAction={props.filterAction} 
                        data={props.movies} 
                        filterQuery={props.filterQuery}
                        searchQuery={props.searchQuery} />
                }
                {props.view !== "startPage" && 
                    <MovieOverview movie={props.movie} />
                }
            </div>
        </div>
    </header>
)}

export default Header;