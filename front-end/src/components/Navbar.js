import React from 'react'
import { Link } from 'react-router-dom';
import redstone from '../images/redstone.png';

export default function Navbar() {
	return (
		<div className='py-1 pr-8 pl-5 bg-gray-dark bg-opacity-70 fixed top-0 w-full flex shadow-lg'>
			<div className='flex  mr-3'>
				<img src={redstone} className='m-auto w-10' alt="logo" />
			</div>
			<h3 className='font-bold text-xl my-auto'>Network Administrator</h3>
			<div className='m-auto mr-0 space-x-5 text-lg '>
				<Link to="/register" className=' p-3'>
					Register
				</Link>
				<Link to="/login" className=' p-3'>
					Login
				</Link>
			</div>
		</div>
	)
}

