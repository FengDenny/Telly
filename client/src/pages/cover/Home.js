import React from "react";
import vegasCover from "../../images/video_cover/Vegas Strip.mp4";
import white_logo from "../../images/Telly_logo_white.svg";
import { Link } from "react-router-dom";
import { loadCookiePopup } from "../../js/cookieBanner";

function Home() {
  loadCookiePopup();
  return (
    <div className='video-container'>
      <video autoPlay='autoplay' loop='loop' muted id='video'>
        <source src={vegasCover} type='video/mp4' />
      </video>
      <div className='video-section'>
        <img src={white_logo} alt='logo' />
        <h5> Your next travel accommodation awaits you.</h5>
        <ul className='flex-direction-row'>
          <li className='login-btn'>
            <Link className='display-flex justify-center' to='/login'>
              Login
            </Link>
          </li>
          <li className='join-btn'>
            <Link className='display-flex justify-center' to='/join'>
              Join, For Free
            </Link>
          </li>
        </ul>
      </div>
      <div id='consent-popup' className='hidden'>
        <p className='consent-p secondary-heading'>
          Telly uses cookies to give users the best experience to interact with
          our website!
          <button id='accept' className='consent-btn secondary-heading '>
            OK
          </button>
        </p>
      </div>
    </div>
  );
}
export default Home;
