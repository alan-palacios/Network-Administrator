import React from 'react'

export default function Input({label, placeholder, className}) {
	return (
		<div className='flex-col flex text-left space-y-3 text-white'>
			<label className='font-bold'>{label}</label>
			<input placeholder={placeholder}
					className='h-12 rounded-lg px-3 border-1 border-gray-400 bg-transparent ' />	
		</div>
	)
}
