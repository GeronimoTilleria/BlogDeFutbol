import React from 'react'
import Navigation from '../components/headers/Navigation'

const Footer = () => {
  return (
    <footer className='bg-dark mt-5 p-4'>
      <div className='main-container'>
        <Navigation />
        <p className='text-white mb-0 mt-4'>Todos los Derechos Reservados© - Victor Casco, Geronimo Tilleria</p>
      </div>
    </footer>
  )
}

export default Footer
