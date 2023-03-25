import React from 'react'
import DetailHeader from '../layouts/DetailHeader'
import Footer from '../layouts/Footer'
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import moment from 'moment';
import axios from 'axios';
import { UserContext } from "../contexts/UserContext";

const BlogDetail = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/post/${id}`);
        setPostInfo(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getPost();
  }, [id]);

  const borrarPublicacion = async (id_post) => {
    try {
      const response = await axios.delete(`http://localhost:4000/post/${id_post}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  if (!postInfo) return '';
  return (
    <div>
      <DetailHeader />
      <div className='main-container'>
        <div>
          <h2 className='mt-5'>{postInfo.title}</h2>
          <time>{moment(postInfo.createdAt).format('DD/MM/YYYY HH:mm:ss')}</time>
          <div className="author">Escrito por {postInfo.author.username}</div>
          {userInfo.id === postInfo.author._id && (
            <div className="edit-row">
              <Link className="btn btn-secondary me-2" to={`/edit/${postInfo._id}`}>
                Editar esta publicacion
              </Link>
              <Link to={"/"}>
                <button className='btn btn-danger' onClick={() => borrarPublicacion(postInfo._id)}>Borrar publicacion</button>
              </Link>
            </div>
          )}
          <img className='w-100 object-fit-cover mt-5' src={`http://localhost:4000/${postInfo.cover}`} alt="imagen" />
          <div className="mt-5" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogDetail
