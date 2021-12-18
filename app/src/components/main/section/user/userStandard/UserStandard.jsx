import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { Toast } from '../../../../helpers/sweet-alert';
import { AxiosRequest } from '../../../../helpers/axios-request';
import Loader from '../../loader/Loader';
import { MainContext } from '../../../../../context/MainContext';
import InvalidPage from '../../error/InvalidPage';

const UserStandard = () => {
  const [globalcontext] = useContext(MainContext);
  const { logged, user } = globalcontext;
  const { name, id } = user;
  const [currentName, setCurrentName] = useState(name);
  const [editing, setEditing] = useState(false);

  const handleInputChange = (e) => {
    const { target } = e;
    const { value } = target;
    setCurrentName(value);
  };
  console.log(id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setEditing(true);
      console.log(currentName);
      const { status } = await AxiosRequest({
        url: `/user/edit/${id}`,
        method: 'PUT',
        data: currentName,
      });
      if (status !== 200) {
        return Toast('Error', 'warning');
      }
      setEditing(false);
      return Toast('Name updated', 'success');
    } catch (error) {
      return Toast('Something bad happen', 'error');
    }
  };
  return (
    <>
      <div className="user-data-container">
        <div className="user-name">
          <h2>
            Hello <span className="">{name}</span>
          </h2>
        </div>
      </div>
        <div className="form-container">
          <h2>Edit user</h2>
          <form onSubmit={handleSubmit} className="form">
            <label>Name</label>
            <br />
            <input
              type="text"
              name="name"
              onChange={handleInputChange}
              placeholder="User"
            />
            <br />
            <br />
            <button className="bt1" type="submit">
              Confirm edit
            </button>
          </form>
          {editing ? 'Editing...' : ''}
        </div>
    </>
  );
};

export default UserStandard;
