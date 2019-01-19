import React from 'react';
import { render, createPortal } from 'react-dom';
//import App from './components/App';
import BuddyView from './buddy-view-components/BuddyView';
import ConfigModal from './buddy-view-components/ConfigModal';
import './assets/semantic-ui-css/semantic.min.css';
import './assets/buddy-view.css';

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div');
root.id = "app-root";
document.body.appendChild( root );

// Now we can render our application into it
render( <BuddyView />, document.getElementById('app-root') );
//createPortal( <ConfigModal />, document.getElementById('modal-root') );
