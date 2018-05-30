import React from 'react';

export default function Movie(props) {
	return (
		<div className="movie clearfix">
			<div className="movie__cover">
				<img className="movie__cover-img" src="" alt="Movie cover image" />
			</div>
			<div className="movie__info">
				<h1 className="movie__title">Pulp Fiction</h1>
				<span className="movie__note"></span>
				<strong className="movie__year">1994</strong>
				<strong className="movie__duration"><span className="movie__duration-min">154</span> min</strong>
				<p className="movie__description"></p>
			</div>
		</div>
	);
}