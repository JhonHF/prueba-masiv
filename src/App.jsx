import React from "react";
import { Comics } from "./components/comics/comics";
import { applyInterceptors } from "./helpers/http-client/";

applyInterceptors();

export const App = () => {
  return <Comics />;
};
