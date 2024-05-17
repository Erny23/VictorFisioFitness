import * as ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import './styles/index.css'

import { Router } from "./routes/router"

ReactDOM.hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);