import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <ul className='nav-style d-flex gap-4 p-0 m-0'>
                <li>
                    <Link className='link-header' to='/'>Inicio</Link>
                </li>
                <li>
                    <Link className='link-header' to='/blogs'>Blogs</Link>
                </li>
                <li>
                    <Link className='link-header' to='/about'>Acerca de</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
