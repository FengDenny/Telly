import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAccountStatus } from "../../actions/stripe";
import { updateUserInLocalStorage } from "../../actions/authAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faSpinner);

const StripeCallback = ({ useHistory }) => {
  const { auth } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth && auth.token) accountStatus();
  }, [auth]);

  const accountStatus = async () => {
    try {
      const res = await getAccountStatus(auth.token);
      // console.log("USER ACCOUNT STATUS ON STRIPE CALLBACK", res);
      //update user in localStorage
      updateUserInLocalStorage(res.data, () => {
        // update redux
        dispatch({
          type: "LOGGED_IN_USER",
          payload: res.data,
        });
        //redirect use to dashboard
        window.location.href = "/user_dashboard/seller";
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className=' display-flex flex-align justify-center height-center'>
      <FontAwesomeIcon icon={faSpinner} className='fa-spinner' size='4x' spin />
    </div>
  );
};

export default StripeCallback;
