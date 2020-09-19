import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Navbar from './Components/Navbar'
import NewExpense from './Components/NewExpense'
import Home from './Components/Home'
import {BrowserRouter as Router, Route}  from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
   
    <Router> 
      <App />
     <center> <Navbar/></center>
    <Route/>
    <Route exact path="/expense/new" component={NewExpense} />
    <Route exact path="/" component={Home} />


    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
