import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import useAuth from '../hooks/useAuth'
import Plotter from '../Plotter'

export default function Network() {
	const auth = useAuth();
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
		auth.request("app-user/network","GET")
			.then(res => {
				console.log(res);
				//Plotter.init(res.elementss,'cy');
			})
			.catch((error) =>{
				console.log(error);
			});
		Plotter.init(elementss,'cy');
	}, [auth])

	return (
		<div className='bg-opacity-70 w-1/3 m-auto h-screen py-20 text-center '>
			<Title>
				Your network
			</Title>
			<div id="cy" className="w-100 h-96 bg-white rounded-xl my-10" />
		</div>
	)
}
