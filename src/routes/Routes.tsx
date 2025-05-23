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
import { Marineford } from "../features/SagasFeatures/MarineFord";
import { GyojinIsland } from "../features/SagasFeatures/GyojinIsland";
import { Dressrosa } from "../features/SagasFeatures/Dressrosa";
import { Whole_Cake } from "../features/SagasFeatures/Whole_Cake";
import { Wano } from "../features/SagasFeatures/Wano";
import {Map} from "../features/MapFeature";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/sagas',
        element: <Sagas />,
    },
    {
        path: '/sagas/more',
        element: <MoreSagas />,
    },
    {
        path: '/test',
        element: <Test /> 
    },
    {
        path: '/sagas/east-blue',
        element: <EastBlue />,
    },
    {
        path: '/sagas/arabasta',
        element: <Alabasta />,
    },
    {
        path: '/sagas/skypiea',
        element: <Skypiea />
    },
    {
        path: '/sagas/water-seven',
        element: <Water7 />,
    },
    {
        path: '/sagas/thriller-bark',
        element: <ThrillerBark />,
    },
    {
        path: '/sagas/marineford',
        element: <Marineford />,
    },
    {
        path: '/sagas/isla-gyojin',
        element: <GyojinIsland />,
    },
    {
        path: '/sagas/dressrosa',
        element: <Dressrosa />,
    },
    {
        path: '/sagas/whole-cake' ,
        element: <Whole_Cake />,
    },
    {
        path: '/sagas/wano',
        element: <Wano />,
    },
      {
    path: '/map',
    element: <Map />,
  }
])