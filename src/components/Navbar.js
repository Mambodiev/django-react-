import React, { useState } from 'react'
import { Button } from './pages/Button';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';



function Navbar() {

  const [click, setClick ] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  
  window.addEventListener( 'resize', showButton);
    
  
 
  return (
    <>
      <IconContext.Provider value={{color:'#fff'}}>
        <div className='Navbar'>
          <div className='navbar-container container'>

            <Link to='/'
            className='navbar-logo' onClick={closeMobileMenu}>
              <MdFingerprint
              className='navbar-icon' />
              REACT JS
            </Link>

            <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/register' className='nav-links' onClick={closeMobileMenu}>
                    Register
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/services'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Services
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/posts'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Posts
                  </Link>
                </li>
                <li className='nav-btn'>
                  {button ? (
                    <Link to='/sign-up' className='btn-link'>
                      <Button buttonStyle='btn--outline'>SIGN UP</Button>
                    </Link>
                  ) : (
                    <Link to='/sign-up' className='btn-link'>
                      <Button
                        buttonStyle='btn--outline'
                        buttonSize='btn--mobile'
                        onClick={closeMobileMenu}
                      >
                        SIGN UP
                      </Button>
                    </Link>
                  )}
                </li>
              </ul>

          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default Navbar