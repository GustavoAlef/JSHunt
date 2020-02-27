import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";


import Main from "./pages/main";
import Product from "./pages/product";

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/products/:id" component={Product} />
    </Switch>
  </BrowserRouter>
);

export default routes;