import React from 'react';
import Textfield from '../components/textfield';
import Filter from '../components/filter';
import Button from '../components/button';

export default class Search extends React.Component {
	
	
	
	render() {
		return (
			<form className="search">
				<fieldset>
					<div className="search__row">
						<Textfield change={this.props.action} id="search" type="search" placeholder="Search" label="Find your movie" />
					</div>
					<div className="search__row">
						<Filter />
						<Button type="submit" className="btn red">Search</Button>
					</div>
				</fieldset>
			</form>
		);
	}
}