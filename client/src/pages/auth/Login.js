import React, { useState } from "react";
import { register } from "../../actions/authAction";
import { showAlert } from "../../js/alerts";
import LoginForm from "./../components/loginForm";
function Login({ history }) {
  const [email, setEmail] = useState("dfeezy4150@gmail.com");
  const [password, setPassword] = useState("415aAa");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      const res = await register(data);
      console.log("REGISTER USER:", res);
      history.push("/login");
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
