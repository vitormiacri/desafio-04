import React from 'react';

import './Header.css';

function Header() {
  return (
    <nav className="header">
      <span className="header-logo">Facebook</span>
      <span className="header-user">
        Meu Perfil
        <i className="material-icons header-user-logo"> account_circle</i>
      </span>
    </nav>
  );
}

export default Header;
