import React, { useState } from "react";
import RegisterForm from "./../components/RegisterForm";
import { register } from "../../actions/authAction";
import { showAlert } from "../../js/alerts";

function Join({ history }) {
  const [name, setName] = useState("dfeng");
  const [email, setEmail] = useState("dfeezy4150@gmail.com");
  const [password, setPassword] = useState("415aAa");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
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
    <div className='join container margin-top-20'>
      <div className='grid-two'>
        <header className='join-header flex-center'>
          <h1 className='font-xl'>Join For Free </h1>
          <p className='secondary-heading secondary-color margin-top-20'>
            Start booking your hotel before flying to your destination
          </p>
        </header>
        <RegisterForm
          handleSubmit={handleSubmit}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          error={error}
          setError={setError}
        />
      </div>
    </div>
  );
}
export default Join;
