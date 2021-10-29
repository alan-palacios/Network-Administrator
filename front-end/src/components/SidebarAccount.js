import React from 'react'
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import redstone from '../images/redstone.png';

export default function SidebarAccount() {
	const auth = useAuth();

	function logout() {
		auth.signout(() => {
			console.log('logged');
		});
	};
	return (
		<div className='pt-5 to-black-transparent from-gray-transparent bg-gradient-to-b bg-opacity-70 fixed top-0 w-60 h-screen flex flex-col shadow-lg'>
			<div className='flex mb-2 px-5 '>
				<div className='flex  mr-3'>
					<img src={redstone} className='m-auto w-10'  />
				</div>
				<h3 className='font-bold text-xl my-auto'>Username</h3>
			</div>
			<div className='flex flex-col w-full font-bold '>
				<Link to="/network" className=' p-3 px-8 hover:bg-red'>
					Your Network
				</Link>
				<Link to="/live" className=' p-3 px-8 hover:bg-red'>
					Live Monitoring
				</Link>
				<Link to="/updates" className=' p-3 px-8 hover:bg-red'>
					Updates
				</Link>
				<Link to="/protocol" className=' p-3 px-8 hover:bg-red'>
					Protocol
				</Link>
				<Link to="/routers" className=' p-3 px-8 hover:bg-red'>
					Routers
				</Link>
				<Link to="/users" className=' p-3 px-8 hover:bg-red'>
					Users
				</Link>
				<Link to="/alerts" className=' p-3 px-8 hover:bg-red'>
					Alerts
				</Link>
				<Link to="/account" className=' p-3 px-8 hover:bg-red'>
					Account
				</Link>
				<button className='appearance-none font-bold text-left p-3 px-8 hover:bg-red '
						onClick={logout}>
					Logout
				</button>
			</div>
		</div>
	)
}

