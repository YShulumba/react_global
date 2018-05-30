import React from 'react';
import Logo from '../components/logo';
import Button from '../components/button';
import Search from '../components/search';
import Movie from '../components/movie';

export default class Header extends React.Component {	
	render() {
		
		return (
			<header id="header" className="header">
				<div className="container">
					<div className="row">
						<Logo url="/">netflixroulette</Logo>
						{this.props.view != "startPage" &&
							<Button type="button" className="btn small">Search</Button>
						}
					</div>
					<div className="row">
						{this.props.view == "startPage" &&
							<Search state={this.props.state} action={this.props.action} />
						}
						{this.props.view != "startPage" &&
							<Movie data="" />
						}
					</div>
				</div>
			</header>
		);
	}
}