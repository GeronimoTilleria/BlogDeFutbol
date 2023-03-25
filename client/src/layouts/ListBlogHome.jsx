import React, { useState, useEffect } from 'react'
import CardBlog from '../components/blog/CardBlog';
import axios from "axios";

const ListBlogHome = () => {

    const [verTodo, setVerTodo] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/post');
                setPosts(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchPosts();
    }, []);
    return (
        <div className='main-container mt-5'>
            <h2>Publicaciones</h2>
            <div className='list-container mt-4'>
                {
                    posts.length === 0 && <p className='mt-4'>No hay publicaciones...</p>
                }
                {
                    posts.length >= 3 ?
                        verTodo ?
                            posts.map((post) => (
                                <CardBlog key={post.id} {...post} />
                            )) :
                            <>
                                <CardBlog element={posts[0]} {...posts[0]} />
                                <CardBlog element={posts[1]} {...posts[1]} />
                                <CardBlog element={posts[2]} {...posts[2]} />
                            </> :
                        posts.map((post) => (
                            <CardBlog key={post.id} {...post} />
                        ))
                }
            </div>
            <div className='text-end'>
                {
                    posts.length > 3 ?
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
