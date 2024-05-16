import * as ReactDOMServer from "react-dom/server"
import { StaticRouter } from "react-router-dom/server"
import Header from "./layout/Header";

import { Router } from "./routes/router";

interface IRenderProps {
  path: string;
}

export const render = ({ path }: IRenderProps) => {
  return ReactDOMServer.renderToString(
    <StaticRouter location={path}>
      <Header />
      <Router />
    </StaticRouter>
  );
};