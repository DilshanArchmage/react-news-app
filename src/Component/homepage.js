import React from 'react'
import GoogleLogin from 'react-google-login'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { selectSignedIn } from '../features/userSlice'
import { setSignedIn } from '../features/userSlice'
import { setUserData } from '../features/userSlice'

import "../styling/home.css";

export default function Homepage() {
    const isSignedIn = useSelector(selectSignedIn);

    const dispatch = useDispatch();
    const login = (response) => {
      console.log(response);
      dispatch(setSignedIn(true));
      dispatch(setUserData(response.profileObj));
    };
  
    return (
      <div className="home__page" style={{ display: isSignedIn ? "none" : "" }}>
        {!isSignedIn ? (
          <div className="login__message">
            <h2>📗</h2>
            <h1>A Readers favourite place!</h1>
            <p>
              We provide high quality online resource for reading blogs. Just sign
              up and start reading some quality blogs.
            </p>
            <GoogleLogin
            clientId="844663125736-0mdf0ikgvmeq999iihcft3ikmfpuvg9n.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className="login__button"
                >
                  Login with Google
                </button>
              )}
              onSuccess={login}
              onFailure={login}
              isSignedIn={true }
              cookiePolicy={"single_host_origin"}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    );
}
