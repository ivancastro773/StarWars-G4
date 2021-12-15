import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

import Login from './components/login/Login';

ReactDOM.render( <
    React.StrictMode >
    <
    BrowserRouter >
    <
    Routes >
    <
    Route exact path = "/login"
    element = { <
        PublicRoute >
        <
        Login / >
        <
        /PublicRoute>
    }
    /> <
    Route exact path = "//*"
    element = { <
        PrivateRoute logged = { true } >
        <
        App / >
        <
        /PrivateRoute>
    }
    /> <
    Route path = "*"
    element = { <
        PrivateRoute logged = { true } >
        <
        App / >
        <
        /PrivateRoute>
    }
    /> <
    /Routes> <
    /BrowserRouter> <
    /React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();