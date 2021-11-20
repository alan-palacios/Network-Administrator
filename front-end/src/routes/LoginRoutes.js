import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Account from '../pages/Account'
import Alerts from '../pages/Alerts'
import AlertsSettings from '../pages/AlertsSettings'
import LiveMonitoring from '../pages/LiveMonitoring'
import Login from '../pages/Login'
import Network from '../pages/Network'
import Protocol from '../pages/Protocol'
import Register from '../pages/Register'
import Routers from '../pages/Routers'
import Users from '../pages/Users'
import PrivateRoute from './PrivateRoute'

export default function LoginRoutes() {
	return (
		<Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <PrivateRoute path="/network">
        <Network />
      </PrivateRoute>
      <PrivateRoute path="/live">
        <LiveMonitoring />
      </PrivateRoute>
      <PrivateRoute path="/alerts">
        <Alerts />
      </PrivateRoute>
      <PrivateRoute path="/protocol">
        <Protocol />
      </PrivateRoute>
      <PrivateRoute path="/routers">
        <Routers />
      </PrivateRoute>
      <PrivateRoute path="/users">
        <Users />
      </PrivateRoute>
      <PrivateRoute path="/alerts-settings">
        <AlertsSettings />
      </PrivateRoute>
      <PrivateRoute path="/account">
        <Account />
      </PrivateRoute>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>		
	)
}

