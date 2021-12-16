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
              <a href="https://www.facebook.com/starwarsla/?brand_redir=169299103121699" target={'_blank'} rel="noreferrer">
                <i className="fab hola fa-facebook fa-3x"></i>
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/starwars/" target={'_blank'} rel="noreferrer">
                <i className="fab fa-instagram hola fa-3x"></i>
              </a>
            </p>
            <p>
              <a href="https://twitter.com/starwars?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target={'_blank'} rel="noreferrer">
                <i className="fab fa-twitter hola fa-3x"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="tags-footer">
        <p>TERM OF USE</p>
        <p>Privacy Policy</p>
        <p>Star Wars at shopDisney</p>
      </div>
    </div>
  );
};

export default Footer;
