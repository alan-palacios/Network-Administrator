import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Title from '../components/Title'
import Plotter from '../Plotter'

export default function Network() {
	const [time, setTime] = useState(10);
	const elementss={
		nodes:[
			{ data:{id: 'router1'}},
			{ data:{id: 'router2'}}
		],
		edges:[
			{ data:{id: 'edge', source: 'router1', target:'router2'}}
		]
	}

	useEffect(() => {
		Plotter.init(elementss,'cy');
	}, [])

	function updateTime() {
		console.log(time);	
	}

	return (
		<div className='bg-opacity-70 w-1/3 m-auto h-screen py-20 text-center '>
			<Title>
				Your network
			</Title>
			<div id="cy" className="w-100 h-96 bg-white rounded-xl my-10" />
			<div className="flex space-x-5">
				<Input label="Update Time" value={time} onChange={setTime} />
				<Button label="Save" className="m-auto mb-0" onClick={updateTime}/>
			</div>
		</div>
	)
}
