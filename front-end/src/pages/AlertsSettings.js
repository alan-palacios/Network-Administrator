import { Icon } from '@iconify/react';
import React, { useState } from 'react'
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Input from '../components/Input';
import Select from '../components/Select';
import Title from '../components/Title'

export default function AlertsSettings() {
	const devices = ["Router 1", "Router 2", "Router 3"];
	const [device, setDevice] = useState(0)
	const interfaces = ["fa 1", "fa 2", "fa 3"];
	const [inter, setInter] = useState(0)
	const links = ["1-2", "2-4", "3-1"];
	const [link, setLink] = useState(0)
	const [deviceAlerts, setdeviceAlerts] = useState(
	{
		lostPackets:{
			description:'Percentage of lost Packets',
			time:12,
			enabled:true
		},
		damagedPackets:{
			description:'Percentage of damaged Packets',
			time:12,
			enabled:true
		},
		dataModification:{
			description:'Data Modification',
			enabled:true
		},
		interfaceChange: {
			description:'Up or Down Interface',
			enabled:true
		}
	}
	)

	const [interfaceAlerts, setInterfaceAlerts] = useState(
	{
		lostPackets:{
			description:'Percentage of lost Packets',
			time:12,
			enabled:true
		},
		damagedPackets:{
			description:'Percentage of damaged Packets',
			time:12,
			enabled:true
		},
		dataModification:{
			description:'Data Modification',
			enabled:true
		},
		interfaceChange: {
			description:'Up or Down Interface',
			enabled:true
		}
	}
	)	
	
	const [linkAlerts, setLinkAlerts] = useState(
	{
		lostPackets:{
			description:'Percentage of lost Packets',
			time:12,
			enabled:true
		},
		damagedPackets:{
			description:'Percentage of damaged Packets',
			time:12,
			enabled:true
		},
		dataModification:{
			description:'Data Modification',
			enabled:true
		},
		interfaceChange: {
			description:'Up or Down Interface',
			enabled:true
		}
	}
	)
	function changeDevice(i) {
		setDevice(i)
	}
	function changeInterface(i) {
		setInter(i)
	}
	function changeLink(i) {
		setLink(i)
	}
	function sendDeviceAlerts() {
		console.log(deviceAlerts);	
	}
	function sendInterfaceAlerts() {
		console.log(interfaceAlerts);	
	}
	function sendLinkAlerts() {
		console.log(linkAlerts);	
	}
	return (
		<div className='bg-opacity-70 w-2/3 m-auto h-screen py-20 text-center'>
			<Title>
				Alerts Settings
			</Title>
			<div>
				<div className='flex h-auto  mt-10'>
					<Select options={devices} value={device} onChange={(i)=>changeDevice(i)} label={'Devices List'} className="w-full"/>
				</div>
				<hr className='my-3'/>
				<table class="w-full mb-5">
					<thead className="">
						<tr>
							<th>Description</th>
							<th>Time</th>
							<th>Enabled</th>
						</tr>
					</thead>
					<tbody >
						{Object.keys(deviceAlerts).map((key, i)=>{
							return(
								<tr>
									<td>{deviceAlerts[key].description}</td>
									{deviceAlerts[key].time==null?
										<td />
									:
										<td className="w-1">
											<Input className="w-20" value={deviceAlerts[key].time} onChange={(value)=>{
												let clone = {
													...deviceAlerts
												};
												clone[key].time = value;
												setdeviceAlerts(clone);
											}} />
										</td>
									}
									<td>
										<Checkbox className="justify-center items-center" value={deviceAlerts[key].enabled} onChange={(value)=>{
												let clone = {
													...deviceAlerts
												};
												clone[key].enabled = value;
												setdeviceAlerts(clone);
											}}/>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
				<Button label="Save" onClick={sendDeviceAlerts} />
			</div>
			<div className="mt-10">
				<div className='flex h-auto  mt-10'>
					<Select options={interfaces} value={inter} onChange={(i)=>changeInterface(i)} label={'Interfaces List'} className="w-full"/>
				</div>
				<hr className='my-3'/>
				<table class="w-full mb-10">
					<thead className="">
						<tr>
							<th>Description</th>
							<th>Time</th>
							<th>Enabled</th>
						</tr>
					</thead>
					<tbody >
						{Object.keys(interfaceAlerts).map((key, i)=>{
							return(
								<tr>
									<td>{interfaceAlerts[key].description}</td>
									{interfaceAlerts[key].time==null?
										<td />
									:
										<td className="w-1">
											<Input className="w-20" value={interfaceAlerts[key].time} onChange={(value)=>{
												let clone = {
													...interfaceAlerts
												};
												clone[key].time = value;
												setInterfaceAlerts(clone);
											}} />
										</td>
									}
									<td>
										<Checkbox className="justify-center items-center" value={interfaceAlerts[key].enabled} onChange={(value)=>{
												let clone = {
													...interfaceAlerts
												};
												clone[key].enabled = value;
												setInterfaceAlerts(clone);
											}} />
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
				<Button label="Save" onClick={sendInterfaceAlerts} />
			</div>
			<div className="mt-10">
				<div className='flex h-auto  mt-10'>
					<Select options={links} value={link} onChange={(i)=>changeLink(i)} label={'Links List'} className="w-full"/>
				</div>
				<hr className='my-3'/>
				<table class="w-full mb-5">
					<thead className="">
						<tr>
							<th>Description</th>
							<th>Time</th>
							<th>Enabled</th>
						</tr>
					</thead>
					<tbody >
						{Object.keys(linkAlerts).map((key, i)=>{
							return(
								<tr>
									<td>{linkAlerts[key].description}</td>
									{linkAlerts[key].time==null?
										<td />
									:
										<td className="w-1">
											<Input className="w-20" value={linkAlerts[key].time} onChange={(value)=>{
												let clone = {
													...linkAlerts
												};
												clone[key].time = value;
												setLinkAlerts(clone);
											}} />
										</td>
									}
									<td>
										<Checkbox className="justify-center items-center" value={linkAlerts[key].enabled} onChange={(value)=>{
												let clone = {
													...linkAlerts
												};
												clone[key].enabled = value;
												setLinkAlerts(clone);
											}} />
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
				<Button label="Save" onClick={sendLinkAlerts}/>
			</div>
		</div>
	)
}
