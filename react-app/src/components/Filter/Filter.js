import React from 'react';
import Radiobutton from '../common/Radiobutton/Radiobutton';
import styles from './Filter.css';

const filterOptions = ['title', 'genres'];

const Filter = (props) => (
    <div className={styles.filter}>
        <span className={styles.filterLabel}>Search by</span>
        <ul className={styles.filterList}>
            {filterOptions.length > 0 && filterOptions.map(val => 
                (
                    <li key={val}>
                        <Radiobutton
                            checked={props.filterQuery === val ? true : false}
                            changed={() => props.action(val)}
                            className="search__filter" 
                            value={val} name="filter">{val}
                        </Radiobutton>
                    </li>
                ))}
        </ul>
    </div>
)

export default Filter;