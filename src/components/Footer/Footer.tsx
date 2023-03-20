import React from 'react';
import githubIcon from '../../assets/icons/Github_logo.png';
import linkedIcon from '../../assets/icons/linkedin_logo.png';
import mailIcon from '../../assets/icons/email_logo.png';

import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <a
            className="github-link"
            href="https://github.com/Weranika"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={githubIcon}
              alt="github icon"
              className="github-link__icon link__icon"
            />
          </a>
          <a
            className="linked-info"
            href="https://www.linkedin.com/in/veranika-lapanava-57748b1b4/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedIcon}
              alt="linked icon"
              className="linked-link__icon link__icon"
            />
          </a>
          <div className="mail__container">
            <a href="mailto:veronikalopanova@gmail.com">
              <img
                src={mailIcon}
                alt="mail icon"
                className="mail-link__icon link__icon"
              />
            </a>
            <p className="mail">veronikalopanova@gmail.com</p>
          </div>
        </div>
        <p className="footer__year">2023</p>
      </div>
    </footer>
  );
}

export default Footer;
