import React from 'react'
import Logo from '../components/headers/Logo'
import Navigation from '../components/headers/Navigation'

const UserHeader = () => {
  return (
    <header className='bg-secondary'>
      <div className='main-container bg-primary d-flex justify-content-between align-items-center py-4'>
        <Logo />
        <Navigation />
      </div>
    </header>
  )
}

export default UserHeader
