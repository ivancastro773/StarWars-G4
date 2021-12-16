import './edit.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Login() {
  return (
    <div className="edit-container">
      <div className="form-container">
      <h2>Edit user</h2>
      <form>
        <label>User</label>
        <br />
        <input type="text" placeholder='User'/>
        <br/>
        <label>E-mail</label>
        <br />
        <input type="email" placeholder='E-mail'/>
        <br/>
        <br />
        <button className='bt1'>Confirm edit</button>
      </form>
      </div>
    </div>
  );
}

export default Login;
