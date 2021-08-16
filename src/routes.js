import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./modules/home/index";
import { GalleryModule } from "./modules/gallery";
import { News } from "./modules/news/index";
import { ClinicPartners } from "./modules/clinicPartner/index";
import { Counter } from "./modules/counter";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/gallery" component={GalleryModule} exact />
      <Route path="/news" component={News} exact />
      <Route path="/partners" component={ClinicPartners} exact />
      <Route path="/counter" component={Counter} exact />
    </Switch>
  );
};
