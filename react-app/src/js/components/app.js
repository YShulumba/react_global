import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Sort from '../components/sort';
import Movies from '../components/movies';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			page: this.props.view,
			data: {},
			updatedData: {},
			searchParam: 'title'
		};
		
		this.search = function(event, param){
			var updatedList = this.state.data;
			console.log(updatedList);
			updatedList = updatedList.filter(function(item){
			  return item.param.toLowerCase().search(
				event.target.value.toLowerCase()) !== -1;
			});
			this.setState({ updatedData: updatedList});
		}
	}
	
	
	
	componentDidMount() {
		var that = this;
		var url = 'http://react-cdp-api.herokuapp.com/movies';
		
		fetch(url)
		.then(function(response) {
			if (response.status >= 400) {
				throw new Error("Bad response from server");
			}
			return response.json();
		})
		.then(function(movies) {
			that.setState({ data: movies.data });
		});
		
	}
	
	render() {
		return (
			<div className="wrapper">
				<Header view={this.state.page} state={this.state} action={this.search(event, this.state.searchParam).bind(this)} />
				<main className="content">
					<Sort view={this.state.page} />
					<Movies data={this.state.updatedData} />
				</main>
				<Footer />
			</div>
		);
	}
}