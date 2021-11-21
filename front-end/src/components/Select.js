import React, { useState } from 'react'
import { Icon } from '@iconify/react';

export default function Select({label, options, value, onChange, className}) {
	const [show, setShow] = useState(false);

	function changeSelection(i) {
		onChange(i); 
		setShow(false);
	}

	return (
		<div className={`flex-col flex text-left space-y-3 text-white ${className}`}>
			<label className='font-bold'>{label}</label>
			<button className='h-12 rounded-lg px-3 border-1 border-gray-400 
								bg-transparent ring-0 outline-none focus:border-white flex '
								onClick={()=>setShow(!show)}>
				<div className='m-auto ml-5'>
					{options[value | 0]}
				</div>
				<div className='w-4 m-auto mr-5'>
					<Icon icon="carbon:chevron-down" width={30} />
				</div>
			</button>
			{
				show?
					<div className='rounded-lg  border-1 border-gray-400 
					bg-transparent ring-0 outline-none focus:border-white flex flex-col overflow-hidden' >
						{options.map((opt, i)=>{
							return (
								<button className='m-auto pl-8 py-2  hover:bg-gray-light w-full text-left'
								key={i}
								onClick={(e)=>changeSelection(i)}>
									{opt}
								</button>
							)
						})}				
					</div>
				:''
			}
		</div>
	)
}
