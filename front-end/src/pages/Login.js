import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'
import Title from '../components/Title'
import useAuth from '../hooks/useAuth'

export default function Login() {
	const auth = useAuth();

	function login() {
		const user={
			email:"j",
			password:"sdf"
		}
		auth.signin(user, () => {
			console.log('logged');
		});
	};

	if (auth.user) {
		return <Redirect to="/network"	/>
	} else {
		return (
			<div className='bg-opacity-70 w-1/3 m-auto h-screen py-32'>
				<div className='bg-gray-dark bg-opacity-70 h-full rounded-2xl text-center p-10 px-20'>
					<Title>
						Login	
					</Title>
					<div className='space-y-10 my-16'>
						<Input placeholder={'username'} label={'Username'} />
						<Input placeholder={'username'} label={'Username'} />
					</div>
					<Button label={'Login'} onClick={login} />
				</div>
			</div>
		)
	}
}
