import React, { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Select from '../components/Select'
import Title from '../components/Title'

export default function LiveMonitoring() {
	const [selected, setSelected] = useState(0);
	const [time, setTime] = useState(10);
	const options = [ 'MIB group 1','MIB group 2','MIB group 3'];
	const packets =[
		{date:'date', description: 'description', packet:'packet', type:'sent'},
		{date:'date', description: 'description', packet:'packet', type:'received'},
		{date:'date', description: 'description', packet:'packet', type:'damaged'},
		{date:'date', description: 'description', packet:'packet', type:'lost'}
	]
	function updateTime() {
		console.log(time);	
	}
	return (
		<div className='bg-opacity-70 w-2/3 m-auto h-screen py-20 text-center'>
			<Title>
				Live Monitoring
			</Title>
			<hr className="my-5" />
			<div className="flex-row flex space-x-5">
				<Select label="MIB Group" options={options} value={selected} onChange={setSelected}
				className="w-1/2" />
				<Input label="Update Time" className="w-1/4" value={time} onChange={setTime}/>
				<Button label="Save" className="mt-9 m-auto w-1/4" onClick={updateTime} />
			</div>
			<div className="w-full mt-10 flex justify-between ">
				<span className="my-auto font-bold">
					Packets
				</span>
			</div>
			<hr className='my-3'/>
			<table class="w-full">
				<thead className="">
					<tr>
						<th>From</th>
						<th>To</th>
						<th>Packet</th>
						<th>Type</th>
					</tr>
				</thead>
				<tbody >
					{packets.map((alert, i)=>
						<tr>
							<td  className="py-3">{alert.date}</td>
							<td>{alert.description}</td>
							<td>{alert.packet}</td>
							<td>{alert.type}</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	)
}