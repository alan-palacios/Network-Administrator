import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'

export default function LoginRoutes() {
	return (
		<Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route exact path="/">
        <Login />
      </Route>
    </Switch>		
	)
}

