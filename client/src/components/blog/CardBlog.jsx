import React from 'react'
import { Link } from 'react-router-dom'

const CardBlog = ({ element }) => {
    return (
        <div>
            <div className="card" style={{width: '100%'}}>
                <img src={require('../../assets/images/acerca-de.jpg')} className="card-img-top" alt="blog imagen" />
                <div className="card-body">
                    <h5 className="card-title">{element.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to='/detail' className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        </div>
    )
}

export default CardBlog
