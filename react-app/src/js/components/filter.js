import React from 'react';
import Radiobutton from '../components/radiobutton';
import FilterItem from '../components/filterItem'

export default class Filter extends React.Component {	
	render() {
		return (
			<div className="search__filter">
				<span className="search__filter-label">Search by</span>
				<ul className="search__filter-list">
					<FilterItem className="search__filter" name="filter" label="Title" />
					<FilterItem className="search__filter" name="filter" label="Genre" />
				</ul>
			</div>
		);
	}
}