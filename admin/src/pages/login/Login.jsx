import React, { useState } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';
import { loginRequest } from '../../context/authContext/apiCalls';
import './login.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
      e.preventDefault();
      loginRequest({email,password},dispatch)
  }

  return (
    <div className='login'>
        <form className='loginForm'>
            <input 
                type='text' 
                placeholder='Email' 
                className='loginInput' 
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type='password' 
                placeholder='Password' 
                className='loginInput' 
                onChange={(e) => setPassword(e.target.value)}
            />
            <button 
                className='loginButton' 
                onClick={handleLogin}
                disabled={isFetching}
            >
                Login
            </button>
        </form>
    </div>
  )
}

export default Login