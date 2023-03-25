import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';
import 'moment/locale/es'
moment.locale('es');

const CardBlog = ({ _id, title, summary, cover, content, createdAt, author }) => {
    return (
        <div>
            <div className="card" style={{ width: '100%', height: '100%' }}>
                <img src={'http://localhost:4000/' + cover} className="card-img-top" alt="imagen ref" />
                <div className="card-body h-100 d-flex flex-column justify-content-between">
                    <div>
                        <h5 className="card-title">{title}</h5>
                        <span>{author.username}</span>
                        <time>   {moment(createdAt).fromNow()}</time>
                        <hr />
                        <p className="card-text">{summary}</p>
                    </div>
                    <Link to={`/post/${_id}`} className="btn btn-primary mt-3">Leer más</Link>
                </div>
            </div>
        </div>
    )
}

export default CardBlog
