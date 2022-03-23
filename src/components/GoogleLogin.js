import React from 'react'
import {GoogleLogin} from "react-google-login";

const clientId = "1037051315722-2q6e8qn3c218qmb5pa37atacpiuuiqk3.apps.googleusercontent.com"


function GoogleLoginButton() {

    const onSuccess = (res) =>{
        console.log("LOGIN SUCCESS! Current user: " , res.profileObj);
      }
    
      const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ",res)
      }




  return (
    <div id="signInButton">
      <GoogleLogin
    
                      clientId={clientId}
                      onSuccess={onSuccess}
                      onFailure={onFailure}
                      cookiePolicy={'single_host_origin'}
                      isSignedIn={true}
                      />

    </div>
  )
}

export default GoogleLoginButton