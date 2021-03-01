import { useSelector } from "react-redux";
import moment from "moment";

const ConnectNav = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { user } = auth;
  return (
    <>
      <div className='dashboard dashboard-card margin-center  display-flex justify-around'>
        <div className='avatar'>
          <h2>{user.name[0]}</h2>
        </div>
        <div className='dasboard-user-info flex-direction-column '>
          <div className='title '>{user.name}</div>
          <div className='description'>{`Joined ${moment(
            user.createdAt
          ).fromNow()}`}</div>
        </div>
        {auth &&
          auth.user &&
          auth.user.stripe_seller &&
          auth.user.stripe_seller.charges_enabled &&
          auth.user(
            <div className='dashboard-info flex-direction-row'>
              <div className='dashboard-balance'>Pending balance</div>
              <div className='dashboard-payout'>Payout settings</div>
            </div>
          )}
      </div>
    </>
  );
};

export default ConnectNav;
