import React from 'react'

export default function Button({label, onClick, className}) {
	return (
		<button onClick={onClick} 
				className={`bg-gray-light h-12 w-full rounded-lg bg-opacity-70 hover:bg-gray-medium ${className}`}>
			{label}
		</button>
	)
}
