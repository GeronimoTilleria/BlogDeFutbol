import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import moment from 'moment';
import axios from 'axios';
import { UserContext } from "../contexts/UserContext";
import DetailHeader from "../layouts/DetailHeader";

const PostPage = () => {
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
        <>
            <DetailHeader />
            <div className="post-page">
                <h1>{postInfo.title}</h1>
                <time>{moment(postInfo.createdAt).format('DD/MM/YYYY HH:mm:ss')}</time>
                <div className="author">Escrito por {postInfo.author.username}</div>
                {userInfo.id === postInfo.author._id && (
                    <div className="edit-row">
                        <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
                            Editar esta publicacion
                        </Link>
                        <Link to={"/"}>
                            <button onClick={() => borrarPublicacion(postInfo._id)}>Borrar publicacion</button>
                        </Link>
                    </div>
                )}
                <div className="image">
                    <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />
                </div>
                <div className="content" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
            </div>
        </>

    )
}

export default PostPage;