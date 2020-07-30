import React from 'react';
import Logo from '../../assets/assembly.svg'

function Header() {
  return (
    <header className="main-header">
      <img src={Logo} alt="Assembly" className="main-logo"/>
    </header>
  )
}

export default Header;