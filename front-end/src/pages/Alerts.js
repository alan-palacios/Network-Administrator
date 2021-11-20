import React from 'react'
import ButtonIcon from '../components/ButtonIcon'
import Title from '../components/Title'

export default function Alerts() {
	const alerts =[
		{date:'date', description: 'description', packet:'packet', type:'sent'},
		{date:'date', description: 'description', packet:'packet', type:'received'},
		{date:'date', description: 'description', packet:'packet', type:'damaged'},
		{date:'date', description: 'description', packet:'packet', type:'lost'}
	]
	return (
		<div className='bg-opacity-70 w-2/3 m-auto h-screen py-20 text-center'>
			<Title>
				Alerts
			</Title>
			<div className="w-full mt-10 flex justify-between ">
				<span className="my-auto font-bold">
					Alerts
				</span>
			</div>
			<hr className='my-3'/>
			<table class="w-full">
				<thead className="">
					<tr>
						<th>Date</th>
						<th>Description</th>
						<th>Packet</th>
						<th>Type</th>
					</tr>
				</thead>
				<tbody >
					{alerts.map((alert, i)=>
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
