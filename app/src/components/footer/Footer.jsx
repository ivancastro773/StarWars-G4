import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="desc-footer">
        <div>
          <h3> Follow Star Wars</h3>
          <div className="link-social">
            <p>
              <a href=""><i class="fab hola fa-facebook fa-3x"></i></a>
            </p>
            <p>
              <a href=""><i class="fab fa-instagram hola fa-3x"></i></a>
            </p>
            <p>
              <a href=""><i class="fab fa-twitter hola fa-3x"></i></a>
            </p>
          </div>
        </div>
      </div>
      <div className="tags-footer">
        <p>TERM OF USE |</p>
        <p>Privacy Policy |</p>
        <p>Star Wars at shopDisney |</p>
      </div>
    </div>
  );
};

export default Footer;
