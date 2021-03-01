import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Telly_logo from "../../images/Telly_logo.svg";
import DashboardNav from "./DashboardNav";
function Navbar() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));
  const history = useHistory();

  const logout = () => {
    dispatch({ type: "LOGOUT", payload: null });
    window.localStorage.removeItem("auth");
    history.push("/");
  };
  return (
    <nav className='navbar primary-color'>
      <div className='container'>
        <header className='nav-logo'>
          <img src={Telly_logo} alt='logo' />
        </header>
        <div className='nav-links  font-md secondary-heading flex-direction-row  justify-end'>
          {auth !== null && (
            <Fragment>
              <ul className='nav flex-direction-row'>
                <li>
                  <NavLink
                    activeStyle={{
                      borderBottom: "1px solid #414f63 ",
                    }}
                    exact
                    to='/hotel_booking'
                  >
                    Hotels
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeStyle={{
                      borderBottom: "1px solid #414f63 ",
                    }}
                    exact
                    to='/user_dashboard'
                  >
                    Dashboard
                  </NavLink>
                </li>
              </ul>
              <ul className='nav-logout '>
                <li className='nav-logout-btn'>
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            </Fragment>
          )}
          {auth === null && (
            <>
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
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
