import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import HomePage from "./pages/Home/homepage.component";
import AppNew from "./pages/Apps/app-new.component";
import Profile from "./pages/Profile/profile.component";
import ProjectList from "./pages/Project/project-list.component";
import ProjectNew from "./pages/Project/project-new.component";
import ModuleList from "./pages/Module/module-list.component";
import ModuleNew from "./components/Modules/modules-new.component";
import TaskList from "./pages/Task/task-list.component";
import Dashboard from "./pages/Dashboard/dashboard.component";

class App extends Component {

  render() {
    return (
        <div>
          <BrowserRouter>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/myapps" component={Dashboard} />
            <Route exact path="/myapps/apps/new" component={AppNew} />
            <Route path="/myapps/dashboard" component={Dashboard} />
            <Route path="/myapps/projects" component={ProjectList} />
            <Route exact path="/myapps/project/new" component={ProjectNew} />
            <Route path="/myapps/modules" component={ModuleList} />
            <Route path="/myapps/module/new" component={ModuleNew} />
            <Route path="/myapps/tasks" component={TaskList} />
            <Route exact path="/profile" component={Profile} />
          </BrowserRouter>
        </div>
    );
  }
}

// HOC
export default connect(null, actions)(App);
