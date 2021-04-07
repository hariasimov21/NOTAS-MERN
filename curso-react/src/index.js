import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import bottonInicio from './components/botonIniciar.js';
import ShoppingList from './components/login.js';
import './css/styles.css';

ReactDOM.render(<App/>, document.getElementById('app'));
ReactDOM.render(<ShoppingList/>, document.getElementById('shoppinglist'));
ReactDOM.render(<bottonInicio/>, document.getElementById('botones'));