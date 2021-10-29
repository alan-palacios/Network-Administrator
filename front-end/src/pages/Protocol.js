import React, { useState } from 'react'
import Checkbox from '../components/Checkbox';
import Select from '../components/Select'
import Title from '../components/Title'

export default function Protocol() {
	const options = ["RIP v2", "OSPF", "Static"];
	const [protocol, setProtocol] = useState(0);
	const [opt, setOpt] = useState(false);

	return (
		<div className='bg-opacity-70 w-2/3 pl-60 m-auto h-screen py-20 text-center'>
			<Title>
				Protocolo
			</Title>
			<hr className='my-8'/>
			<div className='w-full'>
				<div className='w-1/2 px-5 flex-col space-y-5'>
					<Select options={options} value={protocol} onChange={setProtocol} label={'Routing Protocol'}/>
					<Checkbox label={'Passive'} value={opt} onChange={setOpt}/>
				</div>
				<div className='w-1/2'>
				</div>
			</div>
		</div>
	)
}
