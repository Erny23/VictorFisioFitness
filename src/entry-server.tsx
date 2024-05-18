import * as ReactDOMServer from "react-dom/server"
import { StaticRouter } from "react-router-dom/server"

//Barra de navegacion
import Header from "./layout/Header"

//Rutas paa la navegacion
import { Router } from "./routes/router"

//Props para renderizar
interface IRenderProps {
  path: string;
}

//Funcion para renderizar
export const render = ({ path }: IRenderProps) => {
  return ReactDOMServer.renderToString(
    <StaticRouter location={path}>
      <Header />
      <Router />
    </StaticRouter>
  );
};