/* eslint-disable react/prop-types */
import { StyleProvider } from "@ant-design/cssinjs";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./App.css";
import { ENABLED_HASH_ROUTER } from "./config";
import { RouteKey, rc } from "./routes";
import HomePage from "./pages/Home";

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
      <RouterComponent>
        <Routes>
          <Route
            index={true}
            element={<Navigate to={rc(RouteKey.Home).path} replace />}
          />
          <Route path={rc(RouteKey.Home).path} element={<HomePage />} />
        </Routes>
      </RouterComponent>
    </StyleProvider>
  );
}
