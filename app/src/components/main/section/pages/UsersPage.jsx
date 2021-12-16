import { useContext, useState, useEffect } from 'react';

import { Toast } from '../../../helpers/sweet-alert';
import { AxiosRequest } from '../../../helpers/axios-request';
import Loader from '../loader/Loader';
import { MainContext } from '../../../../context/MainContext';
import InvalidPage from '../error/InvalidPage';
import User from '../user/User';

function UsersPage() {
  const [globalcontext] = useContext(MainContext);
  const [users, setUsers] = useState([]);
  const { logged, user } = globalcontext;
  const { name, role } = user;
  const isAdmin = role === 'admin';
  const [apiurl] = useState('/user/all');

  useEffect(() => {
    const getData = async (url = apiurl) => {
      try {
        const { status, data, msg } = await AxiosRequest({ url });
        if (status !== 200) {
          return Toast(msg, 'warning');
        }
        setUsers(data);
      } catch (error) {
        return Toast('Something bad happen', 'error');
      }
    };
    getData();
  }, [apiurl]);

  if (!logged || !isAdmin) {
    return <InvalidPage />;
  }

  return (
    <div className="user-data-container">
      <div className="user-name">
        <h2>
          Hello admin <span className="is-admin">{name}</span>
        </h2>
      </div>
      <div className="user-data">
        {users.length === 0 ? (
          <Loader />
        ) : (
          <div className="user-info">
            {users.map((user, i) => (
              <User key={i} user={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UsersPage;
