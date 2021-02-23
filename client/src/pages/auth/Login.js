import React from "react";
import LoginForm from "./../components/loginForm";
function Login() {
  return (
    <div className='login container '>
      <div className=' flex-center '>
        <h1>Welcome back!</h1>
        <LoginForm />
      </div>
    </div>
  );
}
export default Login;
