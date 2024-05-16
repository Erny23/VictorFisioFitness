import React from "react"
import { json, useLoaderData } from "react-router-dom"

const routes = [
  {
    path: "/",
    loader() {
      return json({ message: "Bienvenido al enrutador!" });
    },
    Component() {
      let data = useLoaderData();
      return <h1>{data.message}</h1>;
    },
  }
];

export default routes