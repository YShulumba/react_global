import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import createElement from './CreateElement';
import FunctionalComponent from './FunctionalComponent'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(createElement, document.getElementById('header'));
ReactDOM.render(<FunctionalComponent />, document.getElementById('footer'));
registerServiceWorker();
