import { Icon } from '@iconify/react'
import React from 'react'

export default function ButtonIcon({icon, onClick, className}) {
	return (
		<button className={`bg-gray-light p-2 rounded-lg bg-opacity-70 hover:border-white border-transparent border-1 ${className}`}
		onClick={onClick}>
			<Icon icon={icon} width={30} />
		</button>
	)
}
