import { Icon } from '@iconify/react'
import React, {useState} from 'react'
import ButtonIcon from '../components/ButtonIcon'
import Title from '../components/Title'
import AddUserModal from './modals/AddUserModal';
import DeleteModal from './modals/DeleteModal';
import EditUserModal from './modals/EditUserModal';

export default function Users() {
	const [showEdit, setShowEdit] = useState(false);
	const [showAdd, setShowAdd] = useState(false);
	const [showDelete, setShowDelete] = useState(false);
	const users = [
		"name1",
		"name2",
		"name3"
	]

	return (
		<div className='bg-opacity-70 w-full  m-auto h-screen py-20 text-center 
		lg:w-2/3 relative'>
			{showEdit?
				<EditUserModal onClose={()=>setShowEdit(false)} />
			:''}
			{showAdd?
				<AddUserModal onClose={()=>setShowAdd(false)} />
			:''}
			{showDelete?
				<DeleteModal onClose={()=>setShowDelete(false)} onCancel={()=>setShowDelete(false)} />
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
						{users.map((user, i)=>{
							return (
								<div key={i} className='w-full text-left flex'>
									<span className='m-auto ml-0'>
										{user}
									</span>
									<div className='m-auto mr-0 space-x-5'>
										<ButtonIcon icon={'carbon:edit'} className={'bg-green'} onClick={()=>setShowEdit(!showEdit)}  />
										<ButtonIcon icon={'carbon:trash-can'} className={'bg-red'} onClick={()=>setShowDelete(!showDelete)}/>
									</div>
								</div>
							)
						})}
					</div>
				</div>
				<div className='w-1/2'>
					<div className='flex h-auto  mt-10'>
						<h1 className='font-bold text-left  text-xl'>Website Users</h1>
						<button className='m-auto mr-0 ' onClick={()=>setShowAdd(!showAdd)}>
							<Icon icon='carbon:add' width={30} />
						</button>
					</div>
					<hr className='my-3'/>
					<div className='flex flex-col space-y-5 mt-8'>
						{users.map((user, i)=>{
							return (
								<div key={i} className='w-full text-left flex'>
									<span className='m-auto ml-0'>
										{user}
									</span>
									<div className='m-auto mr-0 space-x-5'>
										<ButtonIcon icon={'carbon:edit'} className={'bg-green'} onClick={()=>setShowEdit(!showEdit)}/>
										<ButtonIcon icon={'carbon:trash-can'} className={'bg-red'} onClick={()=>setShowDelete(!showDelete)}/>
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
