import { Icon } from '@iconify/react'
import React from 'react'
import { useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Title from '../../components/Title'

export default function EditUserModal({onClose, onConfirm}) {
	const [username, setUsername] = useState('test');
	const [email, setEmail] = useState('emailtest');

	function edit() {
		const user = {
			username,
			email,
		}	
		onConfirm(user);
	}

	return (
		<div className="absolute w-full py-32 px-52 ">
			<div className='bg-gray-dark   h-full rounded-2xl text-center pb-10  m-auto  '>
				<div className="flex p-3">
					<button onClick={onClose} className="mr-0 m-auto">
						<Icon icon="carbon:close" width={30} />
					</button>
				</div>
				<div className="px-20 pb-10">
					<Title>
						Edit User
					</Title>
					<div className='space-y-10 my-10'>
						<Input placeholder={'username'} label={'Username'} value={username} onChange={setUsername} />
						<Input placeholder={'email'} label={'E-mail'} value={email} onChange={setEmail}/>
					</div>
					<Button label={'Save'} className={'bg-green'} onClick={edit} />
				</div>
			</div>
		</div>
	)
}
