import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MainContext } from '../../../../context/MainContext';

function JoinUs() {
  const [globalcontext] = useContext(MainContext);
  const { logged } = globalcontext;
  return (
    <>
      {!logged ? (
        <h2>
          <Link to="signup">Join us</Link> and discover all the benefits we have
          prepared for you
        </h2>
      ) : (
        <h2>Discover all the benefits we have prepared for you</h2>
      )}
    </>
  );
}

export default JoinUs;
