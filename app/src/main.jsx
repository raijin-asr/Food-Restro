import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {createGlobalStyle} from "styled-components"

const globalStyle = createGlobalStyle`

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body{
background-color: black;
color:white;
min-height: 100vh;
}
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <globalStyle/>
    <App />
  </React.StrictMode>
);
