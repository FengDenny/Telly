import { Link } from "react-router-dom";
const RegisterForm = ({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  error,
}) => (
  <div className='form-section flex-center margin-center'>
    <form id='form' className='card card-join-height ' onSubmit={handleSubmit}>
      <div className='form-group'>{error && error.message}</div>
      <div className='form-group flex-direction-column'>
        <input
          id='name'
          type='text'
          className='form-input'
          name='name'
          placeholder='name'
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <label
          htmlFor='name'
          className=' secondary-heading secondary-color font-l'
        >
          Name
        </label>
        <div className='validation'>Name is required</div>
      </div>
      <div className='form-group flex-direction-column'>
        <input
          id='email'
          type='email'
          className='form-input'
          name='email'
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />

        <label
          htmlFor='email'
          className=' secondary-heading secondary-color font-l'
        >
          Email
        </label>
        <div className='validation'>Must be a valid email</div>
      </div>

      <div className='form-group flex-direction-column'>
        <input
          id='password'
          type='password'
          className='form-input'
          name='password'
          placeholder='password'
          pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <label
          htmlFor='password'
          className=' secondary-heading secondary-color font-l'
        >
          Password
        </label>
        <div className='validation'>
          Password must be at least 6 characters long, containing one uppercase,
          lowercase, and number.
        </div>
      </div>

      <div className='form-group flex-direction-column'>
        <p className='signup-agreement secondary-heading secondary-color '>
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
      <div className='form-group flex-direction-column'>
        <p className='secondary-heading secondary-color margin-center'>
          Already have a account?{" "}
          <Link className='primary-color primary-heading to-login' to='/login'>
            Login
          </Link>
        </p>
      </div>
    </form>
  </div>
);

export default RegisterForm;
