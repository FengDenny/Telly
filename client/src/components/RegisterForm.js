import { Link } from "react-router-dom";
const RegisterForm = ({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
}) => (
  <div className='form-section flex-center margin-center'>
    <form className='card ' onSubmit={handleSubmit}>
      <div className='form-group flex-direction-column'>
        <label
          htmlFor='name'
          className=' secondary-heading secondary-color font-l'
        >
          Name
        </label>
        <input
          id='name'
          type='text'
          className='form-input'
          name='name'
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className='form-group flex-direction-column'>
        <label
          htmlFor='email'
          className=' secondary-heading secondary-color font-l'
        >
          Email
        </label>
        <input
          id='email'
          type='text'
          className='form-input'
          name='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className='form-group flex-direction-column'>
        <label
          htmlFor='password'
          className=' secondary-heading secondary-color font-l'
        >
          Password
        </label>
        <input
          id='password'
          type='password'
          className='form-input'
          name='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div className='form-group flex-direction-column'>
        <p className='secondary-heading secondary-color '>
          By Joining, you agree to our {""}
          <Link to='#' className='signup-agreement-links '>
            Terms
          </Link>
          , and{" "}
          <Link to='#' className='signup-agreement-links'>
            Privacy Policy
          </Link>
        </p>
      </div>
      <div className='form-group flex-direction-column'>
        <button className='btn btn-primary '>Join</button>
      </div>
    </form>
  </div>
);

export default RegisterForm;
