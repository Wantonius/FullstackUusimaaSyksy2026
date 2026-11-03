import React from 'react';

interface Props {
	color:string;
}

const Label = (props:Props) => {
	
	const labelStyle:React.CSSProperties = {
		fontFamily:"Arial",
		fontWeight:"bold",
		textAlign:"center"
	}
	return(
		<p style={labelStyle}>{props.color}</p>
	)
}

export default Label;