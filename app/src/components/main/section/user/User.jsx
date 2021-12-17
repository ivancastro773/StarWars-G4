import { useState } from 'react';
import { AxiosRequest } from '../../../helpers/axios-request';
import { Toast } from '../../../helpers/sweet-alert';

function User({ user }) {
  const { name, email, role, id } = user;
  const [currentrole, setCurrentRole] = useState({ value: role });
  const [newrole, setNewRole] = useState({ value: role });
  const [setting, setSetting] = useState(false);

  const handleSelectChange = (e) => {
    const { target } = e;
    const { value } = target;
    setNewRole({ value });
  };

  const handleClickRole = async () => {
    try {
      setSetting(true);
      const { status } = await AxiosRequest({
        url: `/user/editrol/${id}`,
        method: 'PUT',
        data: {
          name,
          email,
          role: newrole.value,
        },
      });
      if (status !== 200) {
        return Toast('Error', 'warning');
      }
      setSetting(false);
      setCurrentRole({ value: newrole.value });
      return Toast('Role updated', 'success');
    } catch (error) {
      return Toast('Something bad happen', 'error');
    }
  };

  return (
    <div className="user-fields">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Current Role: {currentrole.value}</p>
      <div className="role-container">
        <div className="role-setting-options">
          <label htmlFor={`roles-${id}`}>Set a new role</label>
          <select
            name="roles"
            id={`roles-${id}`}
            value={newrole.value}
            onChange={handleSelectChange}
          >
            <option value="admin">admin</option>
            <option value="standard">standard</option>
          </select>
        </div>
        <button
          type="button"
          className="btn-set-role"
          onClick={handleClickRole}
        >
          {setting ? 'Setting...' : 'Set the new role'}
        </button>
      </div>
    </div>
  );
}

export default User;
