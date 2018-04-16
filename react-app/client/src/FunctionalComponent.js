import React from 'react';

var data = ['React.createElement',
			'React.Component', 
			'React.PureComponent', 
			'functional component'];

function GetInfo(props) {
	return <h4> {props.name} </h4>;
}

function FunctionalComponent(){
	return(
		<div className='info'>
			<h3>In this solution were used:</h3>
			{data.map(elem=><GetInfo key={Math.random()} name={elem}/>)}
		</div>	
	);
}

export default FunctionalComponent;