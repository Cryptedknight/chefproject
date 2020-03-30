import React, { Component } from 'react'
import CodechefLogin from 'react-codechef-login';
import './login.css';
import {withRouter} from "react-router-dom";

const responseCodechef = response => {
  console.log("token",response)
}

class Login extends Component {

  render() {
    return (
      <div className='Login'>
        <h1>
          Codechef_Demo WebApp
        </h1>
        <hr/>
        <p className = 'para'>
          Click on Login Now button to use the webapp.
        </p>
        <CodechefLogin
          clientId= '60e0bcc7d1c6506e92e0f20fd65592c5'
          clientSecret='b981abbde443dd0fd726d93009db9e81'
          redirectUri="https://code-int-ud.herokuapp.com/select"
          state='xyzabc'
          buttonText="Login Now"
          onSuccess={responseCodechef}
          onFailure={responseCodechef}
        />
      </div>
    )
  }
}

export default withRouter(Login);
