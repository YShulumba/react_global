import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Layout view="startPage" />
      </div>
    );
  }
}

export default App;
