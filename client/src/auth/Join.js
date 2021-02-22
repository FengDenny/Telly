import React, { useState } from "react";
import RegisterForm from "./../components/RegisterForm";
import axios from "axios";

function Join({ history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `/api/v1/register`;
    const data = {
      name,
      email,
      password,
    };
    try {
      const res = await axios.post(url, data);
      console.log("REGISTER USER:", res);
      history.push("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='join container margin-top-20'>
      <div className='grid-two'>
        <header className='join-header flex-center'>
          <h1 className='font-xl'>Join For Free </h1>
          <p className='secondary-heading secondary-color'>
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
        />
      </div>
    </div>
  );
}
export default Join;
