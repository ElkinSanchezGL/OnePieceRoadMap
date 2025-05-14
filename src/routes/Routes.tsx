import { createBrowserRouter } from "react-router-dom";
import Home from '../features/Home';
import ErrorPage from "../components/ErrorPage";
import { Login } from "../features/Login";
import { Register } from "../features/Register";
import { Sagas } from "../features/Sagas";
import { MoreSagas } from "../features/MoreSagas";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
    },
        {
        path: '/register',
        element: <Register />,
        errorElement: <ErrorPage />
    },
    {
        path: '/login',
        element: <Login />,
        errorElement: <ErrorPage />
    },
    {
        path: '/sagas',
        element: <Sagas />,
        errorElement: <ErrorPage />
    },
    {
        path: '/sagas/more',
        element: <MoreSagas />,
        errorElement: <ErrorPage />
    }

])