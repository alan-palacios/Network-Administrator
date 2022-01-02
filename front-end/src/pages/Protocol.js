import React, { useState } from 'react'
import Checkbox from '../components/Checkbox';
import Select from '../components/Select'
import Title from '../components/Title'
import useAuth from '../hooks/useAuth';
import Button from '../components/Button';

export default function Protocol() {
	const auth = useAuth();
	const options = ["RIP", "OSPF", "EIGRP"];
	const [protocol, setProtocol] = useState(0);
	const [opt, setOpt] = useState(false);

	function changeProtocol(i) {
		setProtocol(i);
	}

	function saveProtocol() {
		const data = {
			protocol: options[protocol],
			admin: auth.user.username,
			adminPass: auth.user.password,
			ip: '10.10.1.1'
		}
		auth.request("router/protocol/","POST", data)
			.then(res => {
				console.log(res);
			})
			.catch((error) =>{
				console.log(error);
			});
		console.log('protocol change to '+options[protocol]);	
	}

	return (
		<div className='bg-opacity-70 w-2/3  m-auto h-screen py-20 text-center'>
			<Title>
				Protocolo
				{options[protocol]}
			</Title>
			<hr className='my-8'/>
			<div className='w-full'>
				<div className='w-1/2 px-5 flex-col space-y-5 '>
					<Select options={options} value={protocol} onChange={(i)=>changeProtocol(i)} label={'Routing Protocol'}/>
					<Button label="Save" onClick={saveProtocol} />
				</div>
			</div>
		</div>
	)
}
