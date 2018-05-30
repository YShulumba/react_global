import React from 'react';
import Textfield from '../../components/common/Textfield/Textfield';
import Button from '../../components/common/Button/Button';
import Filter from '../../components/Filter/Filter';
import styles from './Search.css';
import btnStyles from '../../components/common/Button/Button.css';

export default class Search extends React.Component {
    state = {
        movies: this.props.data
    }

    render() {
        return (
            <form className={styles.search}>
                <fieldset>
                    <div className={styles.row}>
                        <Textfield 
                            change={this.props.searchQuery} 
                            keypress={this.props.action}
                            id="search" 
                            type="search" 
                            label="Search" 
                            placeholder="Find your movie" />
                    </div>
                    <div  className={styles.row}>
                        <Button action={this.props.action} type="button" className={`${btnStyles.red} ${btnStyles.pullRight}`}>Search</Button>
                        <Filter action={this.props.filterAction} filterQuery={this.props.filterQuery} />
                    </div>
                </fieldset>
            </form>
        );
    }
}