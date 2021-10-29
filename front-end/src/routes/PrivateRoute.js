import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../hooks/useAuth'

export default function PrivateRoute({children, ...props}) {
	let auth = useAuth();
	return (
		<Route {...props} render={({ location }) =>
			auth.user ? 
				children
			:
				<Redirect to={{
						pathname: "/login",
						state: { from: location }
					}}
				/>
        	}/>
	)
}