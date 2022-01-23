import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "../pages/main";

import "bootstrap/dist/css/bootstrap.min.css";
import "../components/assets/css/custom.css";

function Routes() {
  return (
		<BrowserRouter>			
			<Route exact path="/" component={Main} />
		</BrowserRouter>
  );
}

export default Routes;
