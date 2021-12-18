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
  const [loadfail, setLoadFail] = useState(false);
  const [filterusers, setFilterUsers] = useState([]);
  const [isfiltered, setIsFiltered] = useState(false);
  const [userquery, setUserQuery] = useState({ query: '' });

  const { logged, user } = globalcontext;
  const { query } = userquery;
  const { name = '', role = '' } = user;
  const isAdmin = role.toLowerCase() === 'admin';

  const handleInputChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setUserQuery((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFiltered(true);
    const usersData = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilterUsers(usersData);
  };

  useEffect(() => {
    if (isAdmin) {
      const getData = async (url) => {
        try {
          const { status, data, msg } = await AxiosRequest({ url });
          if (status !== 200) {
            setLoadFail(true);
            return Toast(msg, 'warning');
          }
          setLoadFail(false);
          setUsers(data);
        } catch (error) {
          setLoadFail(true);
          return Toast('Something bad happen', 'error');
        }
      };
      getData('/user/all');
    }
  }, [isAdmin]);

  if (!logged || !isAdmin) {
    return <InvalidPage />;
  }

  return (
    <div className="user-data-container">
      <div className="user-name">
        <h2>
          Hello admin <span className="is-admin">{name}</span>
        </h2>
        <div className="search-user-container">
          <form onSubmit={handleSubmit} className="search-container">
            <input
              type="text"
              name="query"
              id="query"
              placeholder="Search"
              value={query}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn-search">
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="user-data">
        {users.length === 0 ? (
          loadfail ? (
            <h3>No results</h3>
          ) : (
            <Loader />
          )
        ) : (
          <div className="user-info">
            {!isfiltered ? (
              users.map((user, i) => <User key={i} user={user} />)
            ) : filterusers.length === 0 ? (
              <h3>No results</h3>
            ) : (
              filterusers.map((user, i) => <User key={i} user={user} />)
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default UsersPage;
