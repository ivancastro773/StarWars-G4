import './create-user.css';
import React from 'react';
import {Link} from 'react-router-dom';

function CreateUser() {
  return (
    <div className="create-container">
      <div className="form-container">
      <h2>Create user</h2>
      <form>
        <label>User</label>
        <br />
        <input type="text" placeholder='User'/>
        <br/>
        <label>Email</label>
        <br />
        <input type="email" placeholder='E-mail'/>
        <br />
        <label>Password</label>
        <br />
        <input type="password" placeholder='Password'/>
        <br/>
        <br />
        <button><Link to='Login'>Create</Link></button>
      </form>
      </div>
    </div>
  );
}

export default CreateUser;