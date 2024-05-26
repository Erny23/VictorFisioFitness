"use client";
import * as ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import './styles/index.css'

//Barra de navegacion
import Header from "./layout/Header"
import Footer from "./layout/Footer"

//Rutas para la navegacion
import { Router } from "./routes/router"
import { GoogleOAuthProvider } from "@react-oauth/google"

//Id del cliente para inicio de sesion con OAuth Google
const clientId: string = process.env.CLIENT_ID || '';

//Renderiza los componentes en el lado del cliente
ReactDOM.hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <BrowserRouter>
    <GoogleOAuthProvider clientId={clientId}>
      <Header />
      <Router />
      <Footer />
    </GoogleOAuthProvider>
  </BrowserRouter>
);