import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
ReactDOM.createRoot(document.getElementById("root")).render (
  <GoogleOAuthProvider clientId="353924348774-q72tbeu6kdkjk8hnj3humri0t5g78e9v.apps.googleusercontent.com">
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </GoogleOAuthProvider>
)