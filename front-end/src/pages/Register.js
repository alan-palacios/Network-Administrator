import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Title from '../components/Title'

export default function Register() {
	return (
		<div className='bg-opacity-70 w-full m-auto h-screen py-32
		sm:w-2/3 xl:w-1/3'>
			<div className='bg-gray-dark bg-opacity-70 h-full rounded-2xl text-center p-10 px-10
			sm:px-20'>
				<Title>
					Register
				</Title>
				<div className='space-y-10 my-16'>
					<Input placeholder={'username'} label={'Username'} />
					<Input placeholder={'email'} label={'E-mail'} />
					<Input placeholder={'password'} label={'Password'} />
				</div>
				<Button label={'Register'} />
			</div>
		</div>
	)
}
