import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import User from './pages/User';
import Userslist from './components/Userslist';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/usuarios/:id" exact component={User} />
        <Route path="/usuarios" />
      </Switch>
      <Userslist />
    </BrowserRouter>
  )
};