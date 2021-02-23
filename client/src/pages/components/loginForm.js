import { Link } from "react-router-dom";
const LoginForm = ({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
}) => (
  <div className='login-form'>
    <div className='form-section  '>
      <form className='card ' onSubmit={handleSubmit}>
        <div className='form-group flex-direction-column'>
          <input
            id='email'
            type='email'
            className='form-input'
            name='email'
            placeholder='email'
            // onChange={(e) => setEmail(e.target.value)}
            // value={email}
            required
          />

          <label
            htmlFor='email'
            className=' secondary-heading secondary-color font-l'
          >
            Email
          </label>
        </div>

        <div className='form-group flex-direction-column'>
          <input
            id='password'
            type='password'
            className='form-input'
            name='password'
            placeholder='password'
            pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'
            // onChange={(e) => setPassword(e.target.value)}
            // value={password}
            required
          />
          <label
            htmlFor='password'
            className=' secondary-heading secondary-color font-l'
          >
            Password
          </label>
        </div>
        <div className='form-group flex-direction-column'>
          <button className='btn btn-primary '>Login</button>
        </div>
        <div className='form-group flex-direction-column'>
          <Link className='login-reset margin-center' to='/login'>
            Forgot your password?
          </Link>
        </div>
        <div className='form-group flex-direction-column margin-top-20'>
          <p className='margin-center secondary-heading secondary-color '>
            Need an account?
            <Link className='to-join primary-color primary-heading' to='/join'>
              Join
            </Link>
          </p>
        </div>
      </form>
    </div>
  </div>
);

export default LoginForm;
