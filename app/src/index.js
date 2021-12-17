import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import { MainProvider } from './context/MainContext';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import ResetEmail from './components/login/ResetEmail';
import ResetPassword from './components/login/ResetPassword';

ReactDOM.render(
  <React.StrictMode>
    <MainProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/reset/email" element={<ResetEmail />} />
          <Route
            exact
            path="auth/reset/password/:token"
            element={<ResetPassword />}
          />
          <Route exact path="/*" element={<App />} />
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </MainProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
