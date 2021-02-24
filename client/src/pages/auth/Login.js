import React, { useState } from "react";
import { login } from "../../actions/authAction";
import { showAlert } from "../../js/alerts";
import LoginForm from "./../components/loginForm";
import { useDispatch } from "react-redux";
function Login({ history }) {
  const [email, setEmail] = useState("Dfeng415@yahoo.com");
  const [password, setPassword] = useState("415aAa");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("LOGGED IN DATA:", { email, password });
    const data = {
      email,
      password,
    };
    try {
      const res = await login(data);
      console.log(res);
      if (res.data) {
        console.log("SAVE USER RES IN REDUX AND LOCAL STORAGE THEN REDIRECT: ");
        console.log(res.data);
        // save user and token to localstorage
        window.localStorage.setItem("auth", JSON.stringify(res.data));
        // save user and token to redux
        dispatch({
          type: "LOGGED_IN_USER",
          payload: res.data,
        });
        history.push("/user_dashboard");
      }
    } catch (err) {
      console.log(err);
      setError(showAlert("error", err.response.data.message));
    }
  };
  return (
    <div className='login container '>
      <div className=' flex-center '>
        <h1>Welcome back!</h1>
        <LoginForm
          handleSubmit={handleSubmit}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          error={error}
        />
      </div>
    </div>
  );
}
export default Login;
