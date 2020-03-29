import React, { Component } from 'react'
import CodechefLogin from 'react-codechef-login';
import './login.css';

const responseCodechef = response => {
  console.log(response)
}

class Login extends Component {
  render() {
    return (
      <div className='Login'>
        <CodechefLogin
          clientId= '60e0bcc7d1c6506e92e0f20fd65592c5'
          clientSecret='b981abbde443dd0fd726d93009db9e81'
          redirectUri="https://wizardly-curran.netlify.com"
          state='state-string'
          onSuccess={responseCodechef}
          onFailure={responseCodechef}
        />
      </div>
    )
  }
}

export default Login;
