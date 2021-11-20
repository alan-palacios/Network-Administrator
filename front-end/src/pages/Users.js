import { Icon } from '@iconify/react'
import React, {useState} from 'react'
import { useEffect } from 'react';
import ButtonIcon from '../components/ButtonIcon'
import Title from '../components/Title'
import useAuth from '../hooks/useAuth';
import AddUserModal from './modals/AddUserModal';
import AddUserRouterModal from './modals/AddUserRouterModal';
import DeleteModal from './modals/DeleteModal';
import EditUserModal from './modals/EditUserModal';
import EditUserRouterModal from './modals/EditUserRouterModal';

export default function Users() {
	const auth = useAuth();
	const [showEdit, setShowEdit] = useState(false);
	const [showAdd, setShowAdd] = useState(false);
	const [showDelete, setShowDelete] = useState(false);
	const [showAddRouter, setShowAddRouter] = useState(false);
	const [showEditRouter, setShowEditRouter] = useState(false);
	const [id, setId] = useState(0);
	const [type, setType] = useState(0);

	const [appUsers, setAppUsers] = useState([
		"name1",
		"name2",
		"name3"
	]);
	const [deviceUsers, setDeviceUsers] = useState([
		"device1",
		"device2",
		"device3"
	]);

	useEffect(() => {
		auth.request("app-user/","GET")
			.then(res => {
				console.log(res);
				//setAppUsers(res);
			})
			.catch((error) =>{
				console.log(error);
			});
		auth.request("device-user/","GET")
			.then(res => {
				console.log(res);
				//setDeviceUsers(res);
			})
			.catch((error) =>{
				console.log(error);
			});
	}, [auth])

	function addUser(user) {
		console.log(user);	
		
		auth.request("app-user/","POST", user)
			.then(res => {
				console.log(res);
			})
			.catch((error) =>{
				console.log(error);
			});
		
		setShowAdd(false);
	}

	function editUser(user) {
		console.log(user);	
		console.log('edited user: '+id);
		setShowEdit(false);
		/*
		auth.request("app_users/","PUT", user)
			.then(res => {
				console.log(res);
			})
			.catch((error) =>{
				console.log(error);
			});
		*/
	}
	function addUserRouter(user) {
		user = {
			...user,
			admin: auth.user.username,
			adminPass: auth.user.password	
		}
		auth.request("device-user/","POST", user)
			.then(res => {
				console.log(res);
			})
			.catch((error) =>{
				console.log(error);
			});
		setShowAddRouter(false);
	}
	function editUserRouter(user) {
		console.log(user);	
		console.log('edited user: '+id);
		setShowEditRouter(false);
		/*
		auth.request("device_users/","PUT", user)
			.then(res => {
				console.log(res);
			})
			.catch((error) =>{
				console.log(error);
			});
		*/
	}
	function deleteUser() {
		console.log('delete user: '+id+' type: '+type);
		setShowDelete(false);
		if (type===0) {
			auth.request(`app-user/${appUsers[id]}`,"DELETE")
				.then(res => {
					console.log(res);
				})
				.catch((error) =>{
					console.log(error);
				});
		} else {
			auth.request(`device-user/${deviceUsers[id]}`,"DELETE")
				.then(res => {
					console.log(res);
				})
				.catch((error) =>{
					console.log(error);
				});
		}
	}

	function selectEdit(i) {
		setShowEdit(!showEdit);
		setId(i);
	}
	function selectEditRouter(i) {
		setShowEditRouter(!showEditRouter);
		setId(i);
	}

	function selectDelete(i,type) {
		setShowDelete(!showDelete);
		setType(type);
		setId(i);
	}

	return (
		<div className='bg-opacity-70 w-full  m-auto h-screen py-20 text-center 
		lg:w-2/3 relative'>
			{showEdit?
				<EditUserModal onClose={()=>setShowEdit(false)} onConfirm={editUser} />
			:''}
			{showAdd?
				<AddUserModal onClose={()=>setShowAdd(false)} onConfirm={addUser}/>
			:''}
			{showEditRouter?
				<EditUserRouterModal onClose={()=>setShowEditRouter(false)} onConfirm={editUserRouter} />
			:''}
			{showAddRouter?
				<AddUserRouterModal onClose={()=>setShowAddRouter(false)} onConfirm={addUserRouter}/>
			:''}
			{showDelete?
				<DeleteModal onClose={()=>setShowDelete(false)} onCancel={()=>setShowDelete(false)} onConfirm={deleteUser} />
			:''}
			<Title>
				Users
			</Title>
			<div className='flex space-x-20  '>
				<div className='w-1/2'>
					<div className='flex h-auto  mt-10'>
						<h1 className='font-bold text-left  text-xl'>Network Users</h1>
						<button className='m-auto mr-0 ' onClick={()=>setShowAdd(!showAdd)}>
							<Icon icon='carbon:add' width={30} />
						</button>
					</div>
					<hr className='my-3'/>
					<div className='flex flex-col space-y-5 mt-8'>
						{appUsers.map((user, i)=>{
							return (
								<div key={i} className='w-full text-left flex'>
									<span className='m-auto ml-0'>
										{user}
									</span>
									<div className='m-auto mr-0 space-x-5'>
										<ButtonIcon icon={'carbon:edit'} className={'bg-green'} onClick={()=>selectEdit(i)}  />
										<ButtonIcon icon={'carbon:trash-can'} className={'bg-red'} onClick={()=>selectDelete(i,0)}/>
									</div>
								</div>
							)
						})}
					</div>
				</div>
				<div className='w-1/2'>
					<div className='flex h-auto  mt-10'>
						<h1 className='font-bold text-left  text-xl'>Website Users</h1>
						<button className='m-auto mr-0 ' onClick={()=>setShowAddRouter(!showAddRouter)}>
							<Icon icon='carbon:add' width={30} />
						</button>
					</div>
					<hr className='my-3'/>
					<div className='flex flex-col space-y-5 mt-8'>
						{deviceUsers.map((user, i)=>{
							return (
								<div key={i} className='w-full text-left flex'>
									<span className='m-auto ml-0'>
										{user}
									</span>
									<div className='m-auto mr-0 space-x-5'>
										<ButtonIcon icon={'carbon:edit'} className={'bg-green'} onClick={()=>selectEditRouter(i)}/>
										<ButtonIcon icon={'carbon:trash-can'} className={'bg-red'} onClick={()=>selectDelete(i,1)}/>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}
