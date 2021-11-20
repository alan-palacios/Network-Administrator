import React, {useState} from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Title from '../components/Title'
import { Redirect } from 'react-router-dom';
import api from '../api/api';

export default function Register() {
	const [username, setUsername] = useState('test');
	const [email, setEmail] = useState('emailtest');
	const [password, setPassword] = useState('psw');
	const [redirect, setRedirect] = useState(false);

	function register() {
		const user ={
			username,
			email,
			password
		};
        api("app-user/", "POST", user)
		.then(res => {
			console.log(res);
			setRedirect(true);	
		})
        .catch((error) =>{
			console.log(error);
        });
	}
	if (redirect) return <Redirect to='/login'/>;
	return (
		<div className='bg-opacity-70 w-full m-auto h-auto py-32
		sm:w-2/3 xl:w-1/3'>
			<div className='bg-gray-dark bg-opacity-70 h-full rounded-2xl text-center p-10 px-10
			sm:px-20'>
				<Title>
					Register
				</Title>
				<div className='space-y-10 my-16'>
					<Input placeholder={'username'} label={'Username'} value={username} onChange={setUsername} />
					<Input placeholder={'email'} label={'E-mail'} value={email} onChange={setEmail}/>
					<Input placeholder={'password'} label={'Password'} value={password} onChange={setPassword} type={'password'}/>
				</div>
				<Button label={'Register'} onClick={register} />
			</div>
		</div>
	)
}
