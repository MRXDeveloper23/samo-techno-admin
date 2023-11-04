import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ConfigProvider } from "antd";
import { componentToken, globalToken } from "@/shared/customTheme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        components: componentToken,
        token: globalToken,
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
