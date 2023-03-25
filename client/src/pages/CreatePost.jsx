import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Editor from "../components/blog/Editor";
import DetailHeader from '../layouts/DetailHeader';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();


    async function createNewPost(ev) {
        ev.preventDefault();
        if (!title || !content) {
            setError('Por favor complete todos los campos obligatorios');
            return;
        }
        setIsLoading(true);
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);

        try {
            const response = await axios.post('http://localhost:4000/post', data, { withCredentials: true });
            if (response.status === 200) {
                navigate('/');
            } else {
                setError('Hubo un error al crear la publicación');
            }
        } catch (error) {
            setError('Hubo un error al crear la publicación');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            <DetailHeader />
            <form onSubmit={createNewPost} className="main-container">
                <input type="text"
                    placeholder={'Título'}
                    value={title}
                    onChange={ev => setTitle(ev.target.value)} />
                <input type="text"
                    placeholder={'Resumen'}
                    value={summary}
                    onChange={ev => setSummary(ev.target.value)} />
                <input type="file"
                    onChange={ev => setFiles(ev.target.files)} />
                <Editor value={content} onChange={setContent} />
                <button style={{ marginTop: '5px' }} className="btn btn-primary mt-2" disabled={isLoading}>{isLoading ? 'Creando...' : 'Crear publicación'}</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>

    )
}

export default CreatePost;