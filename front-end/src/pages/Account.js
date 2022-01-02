import React, { useState } from 'react'
import Title from '../components/Title'
import Input from '../components/Input'
import Button from '../components/Button';
import useAuth from '../hooks/useAuth';

export default function Account() {
	const auth = useAuth();
	const [username, setUsername] = useState('test');
	const [email, setEmail] = useState('emailtest');
	const [password, setPassword] = useState('psw');

	function updateUserInfo() {
		const user = {
			username,
			email,
			password,
			admin: auth.user.username,
			adminPass: auth.user.password	
		}
		console.log(user);	
		auth.request("app-user/","POST", user)
			.then(res => {
				console.log(res);
			})
			.catch((error) =>{
				console.log(error);
			});
	}

	return (
		<div className='bg-opacity-70 w-1/3 m-auto h-screen py-20 text-center'>
			<Title>
				Account
			</Title>
			<hr className="my-5"/>	
			<div className='space-y-10 my-10 '>
				<span className="font-bold text-xl mt-10 pt-10">Edit Information</span>
				<Input placeholder={'username'} label={'Username'} value={username} onChange={setUsername} />
				<Input placeholder={'email'} label={'E-mail'} value={email} onChange={setEmail}/>
				<Input placeholder={'password'} label={'Password'} value={password} onChange={setPassword} type={'password'}/>
				<Button label="Save" onClick={updateUserInfo} />
			</div>
		</div>
	)
}
