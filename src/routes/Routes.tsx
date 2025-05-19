import { createBrowserRouter } from "react-router-dom";
import Home from '../features/GeneralFeatures/Home';
import ErrorPage from "../components/ErrorPage";
import { Login } from "../features/GeneralFeatures/Login";
import { Register } from "../features/GeneralFeatures/Register";
import { Sagas } from "../features/SagasFeatures/Sagas";
import { MoreSagas } from "../features/SagasFeatures/MoreSagas";
import Test from "../features/Test";
import { EastBlue } from "../features/SagasFeatures/EastBlue";
import { Alabasta } from "../features/SagasFeatures/Alabasta";
import { Skypiea } from "../features/SagasFeatures/Skypiea";
import { Water7 } from "../features/SagasFeatures/Water7";
import { ThrillerBark } from "../features/SagasFeatures/ThrillerBark";


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
    },
    {
        path: '/test',
        element: <Test /> 
    },
    {
        path: '/sagas/east-blue',
        element: <EastBlue />,
        errorElement: <ErrorPage />
    },
    {
        path: '/sagas/arabasta',
        element: <Alabasta />,
        errorElement: <ErrorPage />
    },
    {
        path: '/sagas/skypiea',
        element: <Skypiea />,
        errorElement:<ErrorPage />
    },
    {
        path: '/sagas/water-seven',
        element: <Water7 />,
        errorElement: <ErrorPage />
    },
    {
        path: '/sagas/thriller-bark',
        element: <ThrillerBark />,
        errorElement: <ErrorPage />
    }

])