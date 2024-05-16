import React from "react";
import { json, useLoaderData } from "react-router-dom";
const routes = [{
  path: "/",
  loader() {
    return json({
      message: "Bienvenido al enrutador!"
    });
  },
  Component() {
    let data = useLoaderData();
    return /*#__PURE__*/React.createElement("h1", null, data.message);
  }
}];
export default routes;
