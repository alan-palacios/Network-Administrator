import React from 'react'
import { useState } from 'react'
import {  Redirect } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'
import Title from '../components/Title'
import useAuth from '../hooks/useAuth'

export default function Login() {
	const [email, setEmail] = useState('emailtest');
	const [password, setPassword] = useState('psw');
	const auth = useAuth();

	function login() {
		const user={
			email,
			password
		}
		console.log(user);
		auth.signin(user, () => {
			console.log('logged');
		});
	};

	if (auth.user) {
		return <Redirect to="/network"	/>
	} else {
		return (
			<div className='bg-opacity-70 w-full m-auto h-screen py-32
			sm:w-2/3 xl:w-1/3'>
				<div className='bg-gray-dark bg-opacity-70 h-full rounded-2xl text-center p-10 px-10
				sm:px-20'>
					<Title>
						Login	
					</Title>
					<div className='space-y-10 my-16'>
						<Input placeholder={'email'} label={'Email'} value={email} onChange={setEmail}/>
						<Input placeholder={'password'} label={'Password'} value={password} onChange={setPassword}/>
					</div>
					<Button label={'Login'} onClick={login} />
				</div>
			</div>
		)
	}
}
