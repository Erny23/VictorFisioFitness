import * as ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import Header from "./layout/Header";

import { Router } from "./routes/router"

ReactDOM.hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <BrowserRouter>
    <Header />
    <Router />
  </BrowserRouter>
);