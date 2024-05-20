import * as ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

//Barra de navegacion
import Header from "./layout/Header"
import Footer from "./layout/Footer"

//Rutas para la navegacion
import { Router } from "./routes/router"

//Renderiza los componentes en el lado del cliente
ReactDOM.hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <BrowserRouter>
    <Header />
    <Router />
    <Footer />
  </BrowserRouter>
);