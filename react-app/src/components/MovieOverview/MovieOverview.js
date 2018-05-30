import React from 'react';
import styles from './MovieOverview.css';

const MovieOverview = function(props){ 
    return (
    <div className={styles.movie}>
        <div className={styles.movieCover}>
            <img src={props.movie.poster_path} alt="" />
        </div>
        <div className={styles.movieInfo}>
            <h1 className={styles.movieTitle}>{props.movie.title}</h1>
            <span className={styles.movieNote}>{props.movie.tagline}</span>
            <strong className={styles.movieYear}>{props.movie.release_date}</strong>
            <strong className={styles.movieDuration}>
                <span className="movie__duration-min">{props.movie.runtime}</span> min
            </strong>
            <p>{props.movie.overview}</p>
        </div>
    </div>
)};

export default MovieOverview;