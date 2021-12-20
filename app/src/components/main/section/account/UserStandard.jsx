import { useContext, useState } from 'react';

import { MainContext } from '../../../../context/MainContext';
import { AxiosRequest } from '../../../helpers/axios-request';
import { Toast } from '../../../helpers/sweet-alert';
import Loader from '../loader/Loader';
import InvalidPage from '../error/InvalidPage';
import useLocalStorage from '../../../../hooks/useLocalStorage';

const UserStandard = () => {
  const [globalcontext, setGlobalContext] = useContext(MainContext);
  const { logged, user } = globalcontext;
  const { name, id } = user;
  const [currentName, setCurrentName] = useState({ username: name });
  const [editing, setEditing] = useState(false);
  const [, setUserData] = useLocalStorage('user', user);
  const { username } = currentName;

  const handleInputChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setCurrentName((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setEditing(true);
      const { status } = await AxiosRequest({
        url: `/user/edit/${id}`,
        method: 'PUT',
        data: {
          name: username,
        },
      });
      if (status !== 200) {
        setEditing(false);
        return Toast('Error', 'warning');
      }
      setUserData({ ...user, name: username });
      setGlobalContext((prevState) => {
        return {
          ...prevState,
          user: {
            ...prevState.user,
            name: username,
          },
        };
      });
      setEditing(false);
      return Toast('Name updated', 'success');
    } catch (error) {
      setEditing(false);
      return Toast('Something bad happen', 'error');
    }
  };

  if (!logged) {
    return <InvalidPage />;
  }

  return (
    <>
      <div className="user-data-container">
        <div className="user-name">
          <h2>
            Hello <span className="">{name}</span>
          </h2>
        </div>
        <div className="form-container">
          <h2>Edit user</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-input">
              <label>Name</label>
              <br />
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleInputChange}
                placeholder="User"
              />
            </div>
            <div className="btn-submit-container">
              <button type="submit" className="btn-auth" disabled={editing}>
                {editing ? 'editing...' : 'edit'}
              </button>
            </div>
            {editing && <Loader className="auth-loader" />}
          </form>
        </div>
      </div>
    </>
  );
};

export default UserStandard;
