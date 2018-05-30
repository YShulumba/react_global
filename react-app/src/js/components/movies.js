import React from 'react';

export default class Movies extends React.Component {
	render() {
		return (
			<div className="movies">
				<div className="container">
					<div className="row">
						<ul className="movies__list">
							{this.props.data.length > 0 &&
								this.props.data.map(function(listValue){
									return (
										<li className="movies__item col-sm">
											<a href="movies__item-link">
												<img className="movies__item-cover" src={listValue.poster_path} alt="Movie cover image" />
												<div className="movies__item-about">
													<span className="movies__item-year">{listValue.release_date}</span>
													<h2 className="movies__item-title">{listValue.title}</h2>
													{
														listValue.genres.map(function(genre){
															return <span className="movies__item-genre">{genre}</span>
														})
													}
												</div>
											</a>
										</li>
									)
								})
							}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}