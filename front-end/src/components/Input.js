import React from 'react'

export default function Input({label, placeholder, className, value, onChange, type}) {
	return (
		<div className={`flex-col flex text-left space-y-3 text-white ${className}`}>
			<label className='font-bold'>{label}</label>
			<input placeholder={placeholder} value={value} onChange={e=>onChange(e.target.value)} type={type || 'text'}
					className='h-12 rounded-lg px-3 border-1 border-gray-400 
								bg-transparent ring-0 outline-none focus:border-white ' />	
		</div>
	)
}
