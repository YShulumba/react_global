import React from 'react';
import Radiobutton from '../common/Radiobutton/Radiobutton';
import styles from './Sort.css';

const sortOptions = ['release_date', 'vote_average'];

const Sort = (props) => (
    <div className={styles.sort}>
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.info}>
                    <strong className="info__data"><span className="info__number">{props.length}</span> movies found</strong>
                </div>
                <div className={styles.sortFilter}>
                    <span className="sort__filter-label">Sort by</span>
                    <ul className={styles.sortFilterList}>
                    {sortOptions.length > 0 && sortOptions.map(val => 
                        (
                            <li key={val}>
                                <Radiobutton
                                    checked={props.searchQuery === val ? true : false}
                                    changed={() => props.action(val)}
                                    className="sort__filter" 
                                    value={val}
                                    name="sort">{val}
                                </Radiobutton>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
)

export default Sort;