import React from 'react'
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { UserContext } from '../../contexts/UserContext';
import axios from "axios";

const Navigation = () => {
    const { setUserInfo, userInfo } = useContext(UserContext);
    const [username, setUsername] = useState(null);

    useEffect(() => {
        if (userInfo && userInfo.username) {
            setUsername(userInfo.username);
        } else {
            setUsername(null);
        }
    }, [userInfo]);

    const logout = () => {
        axios.post('http://localhost:4000/logout', {}, { withCredentials: true })
            .then(() => {
                setUserInfo(null);
                setUsername(null);
                window.location.reload(false);
            })
            .catch(error => {
                console.log(error);
            });
    }

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
                {username ? (
                    <>
                        <li>
                            <Link className='link-header' to="/create">Crear nueva publicación</Link>
                        </li>
                        <li>
                            <Link className='link-header' onClick={logout}>Cerrar Sesión ({username})</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link className='link-header' to="/login">Iniciar Sesión</Link>
                        </li>
                        <li>
                            <Link className='link-header' to="/register">Registrarse</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navigation
