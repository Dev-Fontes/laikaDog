import React from "react";
import {Switch, Route}  from "react-router-dom";
import { Home } from "./modules/home/index";
import { GalleryModule } from "./modules/gallery";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/gallery" component={GalleryModule} exact />
    </Switch>
  );
};
