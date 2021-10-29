import React from 'react'

export default function Button({label, onClick}) {
	return (
		<div>
			<button value={label} onClick={onClick} />	
		</div>
	)
}
