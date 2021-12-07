import { Icon } from '@iconify/react'
import React from 'react'

export default function Checkbox({label, value, onChange, className}) {
	return (
		<div className={`flex-col flex text-left space-y-3 text-white ${className}`}>
			<label className='font-bold'>{label}</label>
			<button className='h-12 w-12 rounded-lg px-2 border-1 border-gray-400 
			bg-transparent ring-0 outline-none focus:border-white flex' 
			onClick={()=>onChange(!value)}>	
			{value?
				<Icon icon="carbon:checkmark" width={30} className='m-auto' />
			:''}	
			</button>
		</div>
	)
}
