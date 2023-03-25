import { useEffect, useState } from "react";
import CardBlog from '../components/blog/CardBlog'
import Footer from '../layouts/Footer'
import ListBlogHeader from '../layouts/ListBlogHeader'
import axios from "axios";

const BlogList = () => {
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
        <div>
            <ListBlogHeader />
            <div className='main-container'>
                <h2 className='mt-5'>Todas las Publicaciones</h2>
                <div className='list-container mt-5'>
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <CardBlog key={post.id} {...post} />
                        ))
                    ) : (
                        <p>No hay publicaciones</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BlogList
