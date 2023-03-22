import React from 'react'
import Logo from '../components/headers/Logo'
import Navigation from '../components/headers/Navigation'

const ListBlogHeader = () => {
    return (
        <header className='header-list-blog'>
            <div className='content-header-list-blog'>
                <div className='bar'>
                    <div className='main-container'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <Logo />
                            <Navigation />
                        </div>
                    </div>
                </div>
                <div className='main-container header-text'>
                    <p>El mejor Blog sobre el mejor deporte del mundo</p>
                </div>
            </div>
        </header>
    )
}

export default ListBlogHeader
