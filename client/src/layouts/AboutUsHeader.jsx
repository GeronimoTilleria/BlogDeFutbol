import React from 'react'
import Logo from '../components/headers/Logo'
import Navigation from '../components/headers/Navigation'

const AboutUsHeader = () => {
    return (
        <header className='header-about'>
            <div className='content-header-about'>
                <div className='bar'>
                    <div className='main-container'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <Logo />
                            <Navigation />
                        </div>
                    </div>
                </div>
                <div className='main-container header-text'>
                    <p>Comunidad Futbolera</p>
                </div>
            </div>
        </header>
    )
}

export default AboutUsHeader
