import React from "react";
import { Route, Switch } from "react-router-dom";
import Search from "../pages/search";
import RepoOwner from '../pages/repo-user';
import RepoReadme from '../pages/readme'
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact strict key={1} component={Search} />
      <Route path="/repo/:username" exact key={2} component={RepoOwner} />
      <Route path="/repo/:username/:project_name" exact key={3} component={RepoReadme} />
    </Switch>
  );
};

export default Routes;
