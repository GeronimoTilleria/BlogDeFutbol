import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Editor from "../components/blog/Editor";
import axios from "axios";
import DetailHeader from "../layouts/DetailHeader";

const EditPost = () => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState(null);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        axios
            .get(`http://localhost:4000/post/${id}`)
            .then((response) => {
                setTitle(response.data.title);
                setContent(response.data.content);
                setSummary(response.data.summary);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const updatePost = async (ev) => {
        ev.preventDefault();

        const data = new FormData();
        data.append("title", title);
        data.append("summary", summary);
        data.append("content", content);
        data.append("id", id);

        if (file) {
            data.append("file", file);
        }

        try {
            await axios.put("http://localhost:4000/post", data, {
                withCredentials: true,
            });
            setRedirect(true);
        } catch (error) {
            console.log(error);
        }
    };

    if (redirect) {
        return <Navigate to={`/post/${id}`} />;
    }

    return (
        <>
            <DetailHeader />
            <form onSubmit={updatePost} className="main-container">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(ev) => setTitle(ev.target.value)}
                />
                <input
                    type="text"
                    placeholder="Summary"
                    value={summary}
                    onChange={(ev) => setSummary(ev.target.value)}
                />
                <input type="file" onChange={(ev) => setFile(ev.target.files[0])} />
                <Editor value={content} onChange={setContent} />
                <button style={{ marginTop: "5px" }} className="btn btn-primary mt-2">Actualizar Publicación</button>
            </form>
        </>

    );
};

export default EditPost;