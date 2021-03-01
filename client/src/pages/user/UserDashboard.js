import ConnectNav from "../../utility/Navbar/ConnectNav";
import DashboardNav from "../../utility/Navbar/DashboardNav";
import { Link } from "react-router-dom";

const UserDashboard = () => {
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
      <div className='user-dashboard-section'>
        <div className='container grid-two '>
          <div className='user-booking'>
            <h2 className='secondary-heading secondary-color'>Your Bookings</h2>
          </div>
          <div className='user-dashbord-browse '>
            <Link to='/hotel_booking'>Browse Hotel</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
