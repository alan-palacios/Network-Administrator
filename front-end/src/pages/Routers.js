import React, { useState } from 'react'
import Select from '../components/Select';
import Title from '../components/Title'
import Input from '../components/Input'
import Button from '../components/Button';

export default function Routers() {
	const routers = ["Router 1", "Router 2", "Router 3"];
	const [router, setRouter] = useState(0)
	const [hostname, setHostname] = useState('hostname');
	const [responsable, setResponsable] = useState('responsable')
	const [location, setLocation] = useState('location')
	const [contact, setContact] = useState('contact')

	function changeRouter(i) {
		setRouter(i);
	}

	function upadateDeviceInfo() {
		const device={
			router,
			hostname,
			responsable,
			location,
			contact
		};
		console.log(device);
	}
	return (
		<div className='bg-opacity-70 w-1/3 m-auto h-screen py-20 text-center'>
			<Title>
				Routers
			</Title>
			<div>
				<Select options={routers} value={router} onChange={(i)=>changeRouter(i)} label={'Select device'}/>
				<hr className="my-5" />
				<div>
					<Input label={'Hostname'} value={hostname} onChange={setHostname} />
					<Input label={'Responsable'} value={responsable} onChange={setResponsable} />
					<Input label={'Location'} value={location} onChange={setLocation} />
					<Input label={'Contact'} value={contact} onChange={setContact} />
				</div>
			</div>
			<Button label="Save" className="mt-10" onClick={upadateDeviceInfo} />
		</div>
	)
}
