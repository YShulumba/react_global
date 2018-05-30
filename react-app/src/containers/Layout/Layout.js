import React from 'react';
import Aux from '../../hoc/Aux';
import Header from '../../components/Header/Header';
import Movies from '../../components/Movies/Movies';
import Footer from '../../components/Footer/Footer';
import Sort from '../../components/Sort/Sort';

import styles from './Layout.css'

export default class Layout extends React.Component {
    state = {
        moviesList: {},
        moviesListFiltered: {},
        moviesCount: 0,
        randomMovie: {}, // will be replaced in future implementation
        searchQuery: '',
        filterQuery: 'title', //default value
        sortBy: 'release_date' //default value
    }

    search = (event) => {
        let param = this.state.filterQuery;
        let updatedList = this.state.moviesList;
        let query = this.state.searchQuery;

        if(event.key === 'Enter' || event.type === 'click') {
            event.preventDefault();
            if (param === 'title') {
                updatedList = updatedList.filter(item => 
                    item[param].toLowerCase().search(
                        query) !== -1);
            } else if (param === 'genres') {
                updatedList = updatedList.filter(item =>
                    item[param].every(genre => 
                        genre.toLowerCase().search(
                            query) !== -1));
            }
            
            this.setState({
                moviesListFiltered: updatedList,
                moviesCount: updatedList.length
            })
            this.sort(updatedList);
        }
    }

    sort = (list) => {
        var option = this.state.sortBy;
        var sortedList = list || this.state.moviesListFiltered;
        if (option === 'vote_average') {
            sortedList = sortedList
                .sort((a, b) =>
                    a[option] > b[option]
                );
        } else if (option === 'release_date') {
            sortedList = sortedList
                .sort((a, b) =>
                    new Date(b[option]) - new Date(a[option])
                );
        }
        this.setState({moviesListFiltered: sortedList})
    }

    setSearchQuery = (event) => {
        let query = (event.target.value).toLowerCase();
        this.setState({searchQuery: query});
    }

    setFilterQuery = (val) => {
        this.setState({filterQuery: val});
    }

    setSortQuery = (val) => {
        this.setState({sortBy: val});
        this.sort();
    }

    componentDidMount() {
        let that = this;
        const url = 'http://react-cdp-api.herokuapp.com/movies';

        fetch(url)
        .then(function(response) {
            if(response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(function(movies) {    
            that.setState({moviesList: movies.data, randomMovie: movies.data[0]});
        })
    }

    render() {
        return (
            <Aux>
                <Header 
                    movies={this.state.moviesList} 
                    action={this.search}
                    filterAction={this.setFilterQuery} 
                    filterQuery={this.state.filterQuery}
                    searchQuery={this.setSearchQuery}
                    view={this.props.view}
                    movie={this.state.randomMovie} />

                <main className={styles.main}>
                    {this.props.view === "startPage" && 
                        <Sort length={this.state.moviesCount} action={this.setSortQuery} searchQuery={this.state.sortBy} />
                    }
                    <Movies data={this.state.moviesListFiltered} />
                </main>

                <Footer />
            </Aux>
        );
    }
}