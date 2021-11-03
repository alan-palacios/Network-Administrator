import React from 'react'
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import redstone from '../images/redstone.png';
import { Icon } from '@iconify/react'

export default function SidebarAccount() {
	const auth = useAuth();

	function logout() {
		auth.signout(() => {
			console.log('logged');
		});
	};
	return (
		<div className='pt-5 to-black-transparent from-gray-transparent bg-gradient-to-b bg-opacity-70  w-60 min-w-max h-screen flex flex-col shadow-lg'>
			<div className='flex mb-2 px-5 '>
				<div className='flex  mr-3'>
					<img src={redstone} className='m-auto w-10' alt="logo" />
				</div>
				<h3 className='font-bold text-xl my-auto'>Username</h3>
			</div>
			<div className='flex flex-col w-full font-bold '>
				<Link to="/network" className='py-3 px-5 space-x-5 hover:bg-red flex '>
					<Icon icon='carbon:network-2' width={30} className="m-auto " />
					<span className="m-auto  w-full">Your Network</span>
				</Link>
				<Link to="/live" className=' py-3 px-5 space-x-5 hover:bg-red flex'>
					<Icon icon='carbon:content-delivery-network' width={30} className="m-auto " />
					<span className="m-auto  w-full">Live Monitoring</span>
				</Link>
				<Link to="/updates" className=' py-3 px-5 space-x-5 hover:bg-red flex'>
					<Icon icon='carbon:update-now' width={30} className="m-auto " />
					<span className="m-auto  w-full">Updates</span>
				</Link>
				<Link to="/protocol" className=' py-3 px-5 space-x-5 hover:bg-red flex'>
					<Icon icon='carbon:network-admin-control' width={30} className="m-auto " />
					<span className="m-auto  w-full">Protocols</span>
				</Link>
				<Link to="/routers" className=' py-3 px-5 space-x-5 hover:bg-red flex'>
					<Icon icon='carbon:router' width={30} className="m-auto " />
					<span className="m-auto  w-full">Routers</span>
				</Link>
				<Link to="/users" className=' py-3 px-5 space-x-5 hover:bg-red flex'>
					<Icon icon='carbon:user-multiple' width={30} className="m-auto " />
					<span className="m-auto  w-full">Users</span>
				</Link>
				<Link to="/alerts" className=' py-3 px-5 space-x-5 hover:bg-red flex'>
					<Icon icon='carbon:notification' width={30} className="m-auto " />
					<span className="m-auto  w-full">Alerts</span>
				</Link>
				<Link to="/account" className=' py-3 px-5 space-x-5 hover:bg-red flex'>
					<Icon icon='carbon:user' width={30} className="m-auto " />
					<span className="m-auto  w-full">Account</span>
				</Link>
				<button className='appearance-none font-bold text-left py-3 px-5 space-x-5 hover:bg-red flex '
					onClick={logout}>
					<Icon icon='carbon:logout' width={30} className="m-auto " />
					<span className="m-auto  w-full">Logout</span>
				</button>
			</div>
		</div>
	)
}

