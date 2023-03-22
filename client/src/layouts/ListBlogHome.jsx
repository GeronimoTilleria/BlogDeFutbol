import React, { useState } from 'react'
import CardBlog from '../components/blog/CardBlog';

const list = [
    {
        name: 'Blog 1'
    },
    {
        name: 'Blog 2'
    },
    {
        name: 'Blog 3'
    },
    {
        name: 'Blog 4'
    },
    {
        name: 'Blog 5'
    },
    {
        name: 'Blog 6'
    },
    {
        name: 'Blog 7'
    },
]

const ListBlogHome = () => {

    const [verTodo, setVerTodo] = useState(false);

    return (
        <div className='main-container mt-5'>
            <h2>Publicaciones</h2>
            <div className='list-container mt-4'>
                {
                    list.length == 0 && <p className='mt-4'>No hay publicaciones...</p> 
                }
                {
                    list.length >= 3 ?
                        verTodo ?
                            list.map((elem, index) => <CardBlog key={index} element={elem} />) :
                            <>
                                <CardBlog element={list[0]} />
                                <CardBlog element={list[1]} />
                                <CardBlog element={list[2]} />
                            </> :
                        list.map((elem, index) => <CardBlog key={index} element={elem}/>)
                }
            </div>
            <div className='text-end'>
                {
                    list.length > 3 ?
                        verTodo ?
                            <button className='mt-3 btn btn-success' onClick={() => setVerTodo(!verTodo)}>Ver Menos</button>
                            :
                            <button className='mt-3 btn btn-success' onClick={() => setVerTodo(!verTodo)}>Ver todos</button>
                        :
                        ''
                }
            </div>
        </div>
    )
}

export default ListBlogHome
