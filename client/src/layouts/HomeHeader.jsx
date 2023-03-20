import React from 'react'
import Logo from '../components/headers/Logo'
import Navigation from '../components/headers/Navigation'

const HomeHeader = () => {
    return (
        <header>
            <div>
                <Logo />
                <Navigation />
            </div>
        </header>
    )
}

export default HomeHeader
