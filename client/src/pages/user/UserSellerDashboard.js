import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { createConnectAccount } from "../../actions/stripe";
import ConnectNav from "../../utility/Navbar/ConnectNav";
import DashboardNav from "../../utility/Navbar/DashboardNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faHotel);
const UserSellerDashboard = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const [loading, setLoading] = useState(false);

  const handlePayout = async () => {
    setLoading(true);
    try {
      let res = await createConnectAccount(auth.token);
      console.log(res); // get login link
      window.location.href = res.data;
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const connected = () => (
    <div className='user-dashboard-section'>
      <div className='container grid-two '>
        <div className='user-booking'>
          <h2 className='secondary-heading secondary-color'>Your Hotels</h2>
        </div>
        <div className='user-dashbord-browse '>
          <Link to='/hotels/new'> + Add New </Link>
        </div>
      </div>
    </div>
  );

  const notConnected = () => (
    <div className='user-dashboard-section'>
      <div className='container'>
        <div className='user-booking  '>
          <FontAwesomeIcon
            className='secondary-heading secondary-color'
            icon={faHotel}
            size='3x'
          />
          <h2 className='secondary-heading secondary-color '>
            Setup payouts to post hotel rooms
          </h2>
          <p className='secondary-heading secondary-color'>
            Telly partners with Stripe to transfer earnings to your bank account
          </p>
          <button
            disabled={loading}
            onClick={handlePayout}
            className='btn-primary'
          >
            {loading ? "Processing Stripe" : "Setup Payouts Now"}
          </button>
          <p className='secondary-heading secondary-color'>
            <small>
              You'll be redirected to Strip to complete the onboarding process.
            </small>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className='user-dashboard-hero'>
        <div className='container'>
          <ConnectNav />
        </div>
      </div>
      <div className='container'>
        <DashboardNav />
      </div>
      {auth && auth.user && auth.user.stripe_seller
        ? // &&
          // auth.user.stripe_seller.charges_enabled
          connected()
        : notConnected()}
      {/* <pre>{JSON.stringify(auth, null, 4)}</pre> */}
    </>
  );
};

export default UserSellerDashboard;
