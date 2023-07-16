import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  Navigate,
  HashRouter,
} from "react-router-dom";
import Access from "../screens/Auth/Access/access";
import WelcomeScreen from "../screens/Auth/welcomeScreen/welcome";
import Favorites from "../screens/Home/views/favorites/favorites";
import MainView from "../screens/Home/views/main/main";
import Market from "../screens/Home/views/market/market";
import Transaction from "../screens/Home/views/transaction/transaction";
import { APP_ROUTES } from "./Route";
import Authorization from "../screens/Auth/authorization/authorization";
import FaceId from "../screens/Auth/faceId/faceId";
import Login from "../screens/Auth/login/login";

function RequireAuth({ children }: any) {
  const token = localStorage.getItem("@token");
  const isTokenAvailable = token != null && token != "";

  let location = useLocation();

  if (!isTokenAvailable) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return children;
  }
}

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={APP_ROUTES.LOGIN} element={<Login />} />
        {/* <Route path={APP_ROUTES.WELCOME} element={<WelcomeScreen />} /> */}
        {/* <Route path={APP_ROUTES.AUTH} element={<Authorization />} /> */}
        <Route path={APP_ROUTES.FACE_ID} element={<FaceId />} />
        {/* <Route path={APP_ROUTES.TOUCH_ID} element={<TouchIdScreen />} /> */}
        <Route
          path={APP_ROUTES.MAIN}
          element={
            <RequireAuth>
              <MainView />
            </RequireAuth>
          }
        />
        <Route
          path={APP_ROUTES.MARKET}
          element={
            <RequireAuth>
              <Market />
            </RequireAuth>
          }
        />
        <Route
          path={APP_ROUTES.FAVORITES}
          element={
            <RequireAuth>
              <Favorites />
            </RequireAuth>
          }
        />
        <Route
          path={APP_ROUTES.FAVORITES}
          element={
            <RequireAuth>
              <Favorites />
            </RequireAuth>
          }
        />
        <Route
          path={APP_ROUTES.TRANSACTION}
          element={
            <RequireAuth>
              <Transaction />
            </RequireAuth>
          }
        />
        <Route
          path={APP_ROUTES.ACCESS}
          element={
            <RequireAuth>
              <Access />
            </RequireAuth>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default Router;
