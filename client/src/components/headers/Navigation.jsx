import React from 'react'

const Navigation = () => {
    return (
        <nav>
            <ul className='nav-style d-flex gap-4'>
                <li>
                    <a>Inicio</a>
                </li>
                <li>
                    <a>Blogs</a>
                </li>
                <li>
                    <a>Acerca de</a>
                </li>
                <li>
                    <a>Cerrar sesion</a>
                </li>
                <li>
                    <a>Iniciar Sesion</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
