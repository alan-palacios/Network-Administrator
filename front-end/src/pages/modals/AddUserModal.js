import { Icon } from '@iconify/react'
import React from 'react'
import {  Redirect } from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Title from '../../components/Title'
import useAuth from '../../hooks/useAuth'

export default function AddUserModal({onClose}) {

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
						Add User
					</Title>
					<div className='space-y-10 my-10 '>
						<Input placeholder={'username'} label={'Username'} />
						<Input placeholder={'email'} label={'Email'} />
						<Input placeholder={'password'} label={'Password'} />
					</div>
					<Button label={'Add User'} className={'bg-green'} />
				</div>
			</div>
		</div>
	)
}
