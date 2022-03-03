import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import GoogleLogin from 'react-google-login';

export default function Login() {

  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  
  const navigate = useNavigate(); 

  const responseGoogle = response => {
    console.log(response);
  };

  const handleGoToHomePage = () => {
    navigate('/');
  }

  return (
    <div className='login-container'>
      <div className='login-container__header'>
        <button onClick={handleGoToHomePage} className='login-container__header-close-button'>X</button>
        <h1 className='login-container__header-title'>Login</h1>
      </div>
      <form className='login-container__form'>
        <label className='login-container__form-email-label' htmlFor="email">Email:</label>
        <input className='login-container__form-email-input' type="email" />
        <label className='login-container__form-password-label' htmlFor="password">Password:</label>
        <input className='login-container__form-password-input' type="text" />
        <span className='login-container__form-forgot-password'>Forgot Password</span>
        <button className='login-container__form-loging-button'>Next</button>
      </form>
      <span>or</span>
      <GoogleLogin
        clientId={googleClientId}
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
    </div>
  )
}
