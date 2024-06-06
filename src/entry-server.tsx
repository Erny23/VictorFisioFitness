import * as ReactDOMServer from "react-dom/server"
import { StaticRouter } from "react-router-dom/server"

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
      <Router />
    </StaticRouter>
  );
};