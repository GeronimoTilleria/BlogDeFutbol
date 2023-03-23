import React from 'react'
import RegisterForm from '../components/login/RegisterForm'
import Footer from '../layouts/Footer'
import UserHeader from '../layouts/UserHeader'

const Register = () => {
  return (
    <div className='login-container'>
      <UserHeader />
      <RegisterForm />
      <Footer />
    </div>
  )
}

export default Register
