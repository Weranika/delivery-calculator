import * as React from 'react';
import './header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo__container">
          <div className="logo">
            <h1
              className="logo__title"
              aria-roledescription="logo"
              aria-label="This is Delivery fee calculator"
            >
              Delivery fee calculator
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
