"use client";
import * as ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import './styles/index.css'

//Rutas para la navegacion
import App from "./App"
import { GoogleOAuthProvider } from "@react-oauth/google"

//Id del cliente para inicio de sesion con OAuth Google
const clientId: string = process.env.VITE_CLIENT_ID || '';

//contextos
import AuthProvider from "./auth/AuthProvider"

//Renderiza los componentes en el lado del cliente
ReactDOM.hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <BrowserRouter>
    <GoogleOAuthProvider clientId={clientId}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </GoogleOAuthProvider>
  </BrowserRouter>
);
