import React from 'react'
import Logo from '../components/headers/Logo'
import Navigation from '../components/headers/Navigation'

const HomeHeader = () => {
    return (
        <header className='header-home'>
            <div className='content-header'>
                <div className='bar'>
                    <div className='main-container'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <Logo />
                            <Navigation />
                        </div>
                    </div>
                </div>
                <div className='main-container header-text'>
                    <p>El mejor Blog de Futbol</p>
                </div>
            </div>
        </header>
    )
}

export default HomeHeader
