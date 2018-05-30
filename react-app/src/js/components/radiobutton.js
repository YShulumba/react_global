import React from 'react';

export default function Radiobutton(props) {
	return (
		<label>
			<input type="radio" name={props.name} className={`${props.className}-radio`} />
			{props.children}
		</label>
	);
}