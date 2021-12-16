import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import { MainProvider } from './context/MainContext';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';

ReactDOM.render(
  <React.StrictMode>
    <MainProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/*" element={<App />} />
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </MainProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
