import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import Access from '../screens/Auth/Access/access';
import Authorization from '../screens/Auth/authorization/authorization';
import FaceId from '../screens/Auth/faceId/faceId';
import Login from '../screens/Auth/login/login';
import TouchIdScreen from '../screens/Auth/touchId/touchId';
import WelcomeScreen from '../screens/Auth/welcomeScreen/welcome';
import Favorites from '../screens/Home/views/favorites/favorites';
import MainView from '../screens/Home/views/main/main';
import Market from '../screens/Home/views/market/market';
import Transaction from '../screens/Home/views/transaction/transaction';
import { APP_ROUTES } from './Route';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={APP_ROUTES.WELCOME} element={<WelcomeScreen />} />
                <Route path={APP_ROUTES.AUTH} element={<Authorization />} />
                <Route path={APP_ROUTES.FACE_ID} element={<FaceId />} />
                <Route path={APP_ROUTES.TOUCH_ID} element={<TouchIdScreen />} />
                <Route path={APP_ROUTES.LOGIN} element={<Login />} />
                <Route path={APP_ROUTES.MAIN} element={<MainView />} />
                <Route path={APP_ROUTES.MARKET} element={<Market />} />
                <Route path={APP_ROUTES.FAVORITES} element={<Favorites />} />
                <Route path={APP_ROUTES.FAVORITES} element={<Favorites />} />
                <Route path={APP_ROUTES.TRANSACTION} element={<Transaction />} />
                <Route path={APP_ROUTES.ACCESS} element={<Access />} />
            </Routes>
        </BrowserRouter>
    )

};

export default Router;
