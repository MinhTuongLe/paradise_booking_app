/* eslint-disable react/prop-types */
import { StyleProvider } from "@ant-design/cssinjs";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";

import "./App.css";
import { ENABLED_HASH_ROUTER } from "./config";
import { RouteKey, rc } from "./routes";
import HomePage from "./pages/Home";
import AppLayout from "./components/AppLayout";
import PlaceDetailPage from "./pages/PlaceDetail";
import store from "./store";
import { Provider } from "react-redux";

function RouterComponent(props) {
  return ENABLED_HASH_ROUTER ? (
    <HashRouter>{props.children}</HashRouter>
  ) : (
    <BrowserRouter>{props.children}</BrowserRouter>
  );
}

export function App() {
  return (
    <StyleProvider hashPriority="high">
      <Provider store={store}>
        <RouterComponent>
          <Routes>
            <Route
              path="/"
              element={
                <AppLayout>
                  <Outlet />
                </AppLayout>
              }
            >
              <Route
                index={true}
                element={<Navigate to={rc(RouteKey.Home).path} replace />}
              />
              <Route path={rc(RouteKey.Home).path} element={<HomePage />} />
              <Route
                path={`${rc(RouteKey.Home).path}/*`}
                element={
                  <Routes>
                    <Route
                      path={rc(RouteKey.PlaceDetail).subpath}
                      element={<PlaceDetailPage />}
                    />
                  </Routes>
                }
              />
            </Route>
          </Routes>
        </RouterComponent>
      </Provider>
    </StyleProvider>
  );
}
