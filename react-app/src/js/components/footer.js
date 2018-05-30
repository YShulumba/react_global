import React from 'react';
import Logo from '../components/logo';

export default class Footer extends React.Component {	
	render() {
		return (
			<footer className="footer">
				<div className="container">
					<div className="row">
						<Logo url="/">netflixroulette</Logo>
					</div>
				</div>
			</footer>
		);
	}
}