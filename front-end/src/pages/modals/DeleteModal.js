import { Icon } from '@iconify/react'
import React from 'react'
import {  Redirect } from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Title from '../../components/Title'
import useAuth from '../../hooks/useAuth'

export default function DeleteModal({onClose, onConfirm, onCancel}) {

	return (
		<div className="absolute w-full py-32 px-80 ">
			<div className='bg-gray-dark h-full rounded-2xl text-center m-auto  '>
				<div className="flex p-3">
					<button onClick={onClose} className="mr-0 m-auto">
						<Icon icon="carbon:close" width={30} />
					</button>
				</div>
				<div className="px-20 pb-10">
					<Title>
						Are you sure you want to delete "username1"?
					</Title>
					<div className="space-y-10 py-10">
						<Button label={'Yes'} className={'bg-red'} onClick={onConfirm} />
						<Button label={'Cancel'} onClick={onCancel} />
					</div>
				</div>
			</div>
		</div>
	)
}
