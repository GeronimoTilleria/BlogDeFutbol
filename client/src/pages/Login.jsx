import React from 'react'
import LoginForm from '../components/login/LoginForm'
import Footer from '../layouts/Footer'
import UserHeader from '../layouts/UserHeader'

const Login = () => {
  return (
    <div className='login-container'>
      <UserHeader />
      <LoginForm />
      <Footer />
    </div>
  )
}

export default Login
