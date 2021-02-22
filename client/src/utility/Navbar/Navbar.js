import React from "react";
import { NavLink } from "react-router-dom";
import Telly_logo from "../../images/Telly_logo.svg";

function Navbar() {
  return (
    <nav className='navbar primary-color'>
      <div className='container'>
        <header className='nav-logo'>
          <img src={Telly_logo} alt='logo' />
        </header>
        <div className='nav-links  font-md secondary-heading flex-direction-row  justify-end'>
          <ul className='nav flex-direction-row'>
            <li>
              <NavLink
                activeStyle={{
                  borderBottom: "1px solid #414f63 ",
                }}
                exact
                to='/'
              >
                Home
              </NavLink>
            </li>
          </ul>
          <ul className='nav-btn flex-direction-row'>
            <li>
              <NavLink
                activeStyle={{
                  borderBottom: "1px solid #414f63 ",
                }}
                exact
                to='/login'
              >
                Login
              </NavLink>
            </li>
            <li className='nav-btn'>
              <NavLink
                activeStyle={{
                  borderBottom: "1px solid #414f63 ",
                }}
                exact
                to='/join'
              >
                Join
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
