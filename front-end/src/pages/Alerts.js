import React, { useEffect, useState } from 'react'
import ButtonIcon from '../components/ButtonIcon'
import Title from '../components/Title'
import useAuth from '../hooks/useAuth'

export default function Alerts() {
	const auth = useAuth();
	const [alerts, setAlerts] = useState([
		{date:'date', description: 'description', packet:'packet', type:'sent'},
		{date:'date', description: 'description', packet:'packet', type:'received'},
		{date:'date', description: 'description', packet:'packet', type:'damaged'},
		{date:'date', description: 'description', packet:'packet', type:'lost'}
	])

	useEffect(() => {
		auth.request("app-user/alerts","GET")
			.then(res => {
				console.log(res);
				//setAlerts(res.alerts);
			})
			.catch((error) =>{
				console.log(error);
			});
	}, [auth])

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
