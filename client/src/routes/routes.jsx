import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import AboutUs from "../pages/AboutUs";
import BlogDetail from "../pages/BlogDetail";
import BlogList from "../pages/BlogList";
import CreatePost from "../pages/CreatePost";
import EditPost from "../pages/EditPost";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import PostPage from "../pages/PostPage";
import Register from "../pages/Register";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/blogs',
                element: <BlogList />
            },
            {
                path: '/detail',
                element: <BlogDetail />
            },
            {
                path: '/about',
                element: <AboutUs />
            },
            {
                path: '/create',
                element: <CreatePost />
            },
            {
                path: '/post/:id',
                element: <BlogDetail />
            },
            {
                path: '/edit/:id',
                element: <EditPost />
            },
        ]
    },

]);