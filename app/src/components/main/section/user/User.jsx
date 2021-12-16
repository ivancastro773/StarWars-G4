function User({ user }) {
  const { name, email } = user;
  return (
    <div className="user-fields">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default User;
