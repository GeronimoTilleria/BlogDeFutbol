import React from 'react'
import CardBlog from '../components/blog/CardBlog'
import Footer from '../layouts/Footer'
import ListBlogHeader from '../layouts/ListBlogHeader'

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

const BlogList = () => {
    return (
        <div>
            <ListBlogHeader />
            <div className='main-container'>
                <h2 className='mt-5'>Todas las Publicaciones</h2>
                <div className='list-container mt-5'>
                    {
                        list.length == 0 && <p className='mt-4'>No hay publicaciones...</p>
                    }
                    {
                        list.length !== 0 && list.map((elem, index) => <CardBlog key={index} element={elem} />)
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BlogList
