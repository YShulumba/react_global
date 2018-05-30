import React from 'react';
import styles from './Movies.css';

const Movies = (props) => (
    <div className={styles.movies}>
        <div className={styles.container}>
            <div className={styles.row}>
                <ul className={styles.moviesList}>
                    {props.data.length > 0 && props.data.map(item => (
                        <li key={item.id} className={styles.moviesItem}>
                            <a href="/" className={styles.moviesItemLink}>
                                <img className={styles.moviesItemCover} src={item.poster_path} alt="" />
                                <div className={styles.moviesItemAbout}>
                                    <span className={styles.moviesItemYear}>{item.release_date}</span>
                                    <h2 className={styles.moviesItemTitle}>{item.title}</h2>
                                    {
                                        item.genres.map(genre => (
                                            <span key={`${genre}_${item.id}`} className={styles.moviesItemGenre}>{genre}</span>
                                        ))
                                    }
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
)

export default Movies;