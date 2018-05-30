import React from 'react';

export default function Logo(props) {
	return (
		<strong className="logo">
			<a href={props.url || '#'}>{props.children}</a>
		</strong>
	);
}