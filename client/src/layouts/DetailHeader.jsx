import React from 'react'
import Logo from '../components/headers/Logo'
import Navigation from '../components/headers/Navigation'

const DetailHeader = () => {
    return (
        <header>
            <div className='bg-dark'>
                <div className='main-container'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Logo />
                        <Navigation />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default DetailHeader
