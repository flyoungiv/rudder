import React from 'react';
import ReactDOM from 'react-dom';
import './buddy-view.css'
import './semantic-ui-css/semantic.min.css';
import BuddyView from './BuddyView';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BuddyView />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
