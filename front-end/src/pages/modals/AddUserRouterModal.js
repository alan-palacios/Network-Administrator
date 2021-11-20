import { Icon } from '@iconify/react'
import React from 'react'
import { useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Title from '../../components/Title'

export default function AddUserRouterModal({onClose, onConfirm}) {
	const [username, setUsername] = useState('test');
	const [password, setPassword] = useState('psw');
	const [ip, setIp] = useState('10.10.1.1');

	function add() {
		const user = {
			ip,
			username,
			password
		}	
		onConfirm(user);
	}

	return (
		<div className="absolute w-auto py-22 px-52 ">
			<div className='bg-gray-dark   h-full rounded-2xl text-center pb-10  m-auto  '>
				<div className="flex p-3">
					<button onClick={onClose} className="mr-0 m-auto">
						<Icon icon="carbon:close" width={30} />
					</button>
				</div>
				<div className="px-20 pb-10">
					<Title>
						Add Device User
					</Title>
					<div className='space-y-10 my-10 '>
						<Input placeholder={'ip'} label={'ip'} value={ip} onChange={setIp} />
						<Input placeholder={'username'} label={'Username'} value={username} onChange={setUsername} />
						<Input placeholder={'password'} label={'Password'} value={password} onChange={setPassword} type={'password'}/>
					</div>
					<Button label={'Add User'} className={'bg-green'} onClick={add} />
				</div>
			</div>
		</div>
	)
}
