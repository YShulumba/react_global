import React from 'react';
import FilterItem from '../components/filterItem'

export default class Sort extends React.Component {	
	render() {
		return (
			<div className="sort">
				<div className="container">
					<div className="row">
						{this.props.view == "startPage" &&
							<div>
								<div className="info">
									<strong className="info__data"><span className="info__number">7</span> movies found</strong>
								</div>
								<div className="sort__filter">
									<span className="sort__filter-label">Sort by</span>
									<ul className="sort__filter-list">
										<FilterItem className="sort__filter" name="sorting" label="release date" />
										<FilterItem className="sort__filter" name="sorting" label="rating" />
									</ul>
								</div>
							</div>
						}
						{this.props.view != "startPage" &&
							<div className="info">
								<strong className="info__data">Films by <span className="info__filter-data">Drama</span> genre</strong>
							</div>
						}
					</div>
				</div>
			</div>
		);
	}
}