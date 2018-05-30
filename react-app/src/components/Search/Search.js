import React from 'react';
import Textfield from '../../components/common/Textfield/Textfield';
import Button from '../../components/common/Button/Button';
import Filter from '../../components/Filter/Filter';
import styles from './Search.css';
import btnStyles from '../../components/common/Button/Button.css';

const Search = (props) => (
    <form className={styles.search}>
        <fieldset>
            <div className={styles.row}>
                <Textfield 
                    change={props.searchQuery} 
                    keypress={props.action}
                    id="search" 
                    type="search" 
                    label="Search" 
                    placeholder="Find your movie" />
            </div>
            <div  className={styles.row}>
                <Button action={props.action} type="button" className={`${btnStyles.red} ${btnStyles.pullRight}`}>Search</Button>
                <Filter action={props.filterAction} filterQuery={props.filterQuery} />
            </div>
        </fieldset>
    </form>
);

export default Search;