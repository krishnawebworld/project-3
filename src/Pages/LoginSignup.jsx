import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>Sign up</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder='your name' />
            <input type="email" placeholder='Email address' />
            <input type="password" placeholder='password' />
          </div>
          <button>continue</button>
          <p className='loginsignup-login'>Already have an account ? <span>Login</span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continueing i agree to the terms of use & privacy</p>
          </div>
        </div>
    </div>
  )
}

export default LoginSignup
