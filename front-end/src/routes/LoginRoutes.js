import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../pages/Login'
import Network from '../pages/Network'
import Register from '../pages/Register'
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
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>		
	)
}

