import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Title from '../components/Title'

export default function Login() {
	return (
		<div className='bg-opacity-70 w-1/3 m-auto h-screen py-32'>
			<div className='bg-gray-dark bg-opacity-70 h-full rounded-2xl text-center p-10'>
				<Title>
					Login	
				</Title>
				<Input placeholder={'username'} label={'Username'} />
				<Input placeholder={'username'} label={'Username'} />
				<Button label={'Login'} />
			</div>
		</div>
	)
}
