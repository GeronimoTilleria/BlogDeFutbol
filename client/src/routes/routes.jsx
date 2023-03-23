import { createBrowserRouter } from "react-router-dom";
//import HomeHeader from "../layouts/HomeHeader";
import Layout from "../layouts/Layout";
import AboutUs from "../pages/AboutUs";
import BlogDetail from "../pages/BlogDetail";
import BlogList from "../pages/BlogList";
import Home from "../pages/Home";
import Login from "../pages/Login";
//import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
//import Register from "../pages/Register";

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
        ]
    },
    
]);