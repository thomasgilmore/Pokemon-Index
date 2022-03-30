import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import GoogleLogin from 'react-google-login';
import { PokemonContext } from '../Context/Context.tsx';

export default function Login() {
  const { setGoogleUserData, setUserGoogleId, handleCheckUser, setUserToken, setIsSignedInState } = useContext(PokemonContext)

  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const navigate = useNavigate();

  const handleGoToUserDashboard = () => {
    navigate('/userdashboard');
  }

  const responseGoogle = response => {
    console.log(response);
    setGoogleUserData(response);
    const userGoogleId = response.googleId;
    setUserGoogleId(userGoogleId);
    handleCheckUser(userGoogleId);
    setUserToken(response.tokenId);
    const currentLocalStorage = JSON.parse(localStorage.getItem('second-app-store'));
    console.log(currentLocalStorage);
    currentLocalStorage.isSignedIn = true;
    currentLocalStorage.currentUserGoogleId = response.googleId;
    const currentUser = {
      googleId: response.googleId,
      favoritePokemon: [],
      userProfileImg: response.profileObj.imageUrl,
      userName: response.profileObj.name,
      userEmail: response.profileObj.email,
    }
    const isUser = currentLocalStorage.userInfo.some((user) => user.googleId === currentUser.googleId)
    if (!isUser) {
      currentLocalStorage.userInfo.push(currentUser);
    }
    localStorage.setItem('second-app-store', JSON.stringify(currentLocalStorage));
    setIsSignedInState(true);
    if (response.Du) {
      handleGoToUserDashboard();
    }
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
