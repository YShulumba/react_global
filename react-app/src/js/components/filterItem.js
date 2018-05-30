import React from 'react';
import Radiobutton from '../components/radiobutton';

export default function FilterItem(props) {
	return (
		<li className={`${props.className}-item`}>
			<Radiobutton name={props.name} className={props.className}>{props.label}</Radiobutton>
		</li>
	);
}