import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { showPaymentAlert } from "../../js/alerts";
import moment from "moment";
import {
  getAccountBalance,
  currencyFormat,
  payoutSetting,
} from "../../actions/stripe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
import { faStripe } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faHandHoldingUsd, faStripe);

const ConnectNav = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [balance, setBalance] = useState(0);
  const { auth } = useSelector((state) => ({ ...state }));
  const { user, token } = auth;

  useEffect(() => {
    getAccountBalance(token).then((res) => {
      setBalance(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePayoutSetting = async () => {
    setLoading(true);
    try {
      const res = await payoutSetting(token);
      console.log("RES FOR PAYOUT SETTING LINK", res);
      window.location.href = res.data.url;
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(
        showPaymentAlert(
          "error",
          "No money for you! This is for testing purposes only =("
        )
      );
    }
  };

  return (
    <>
      <div
        id='payment'
        className='dashboard dashboard-card margin-center  display-flex justify-around'
      >
        {error && error.message}
        <div className='avatar'>
          <h2>{user.name[0]}</h2>
        </div>
        <div className='dasboard-user-info flex-direction-column '>
          <div className='title '>{user.name}</div>
          <div className='description'>{`Joined ${moment(
            user.createdAt
          ).fromNow()}`}</div>
        </div>
        {auth && auth.user && auth.user.stripe_seller && (
          // enable this if charges_enable is true
          // auth.user.stripe_seller.charges_enabled &&
          // auth.user(
          <div className='dashboard-info flex-direction-row margin-top-20'>
            <div className='dashboard-balance'>
              <FontAwesomeIcon icon={faHandHoldingUsd} size='1x' />
              {balance &&
                balance.pending &&
                balance.pending.map((bp, i) => {
                  return (
                    <span
                      key={i}
                      className='secondary-heading secondary-color padding'
                    >
                      {currencyFormat(bp)}
                    </span>
                  );
                })}
            </div>
            <div className='dashboard-payout' onClick={handlePayoutSetting}>
              <FontAwesomeIcon icon={faStripe} size='2x' />
              <span className='secondary-heading secondary-color padding'>
                Payout
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ConnectNav;
