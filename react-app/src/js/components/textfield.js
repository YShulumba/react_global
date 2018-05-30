import React from 'react';

export default function Textfield(props) {
	return (
		<div>
			<label htmlFor={`${props.id}__field`} className={`${props.id}__label`}>{props.label}</label>
			<input onChange={props.change} type={props.type} id={`${props.id}__field`} className={`${props.id}__field`} placeholder={props.placeholder} />
		</div>
	);
}