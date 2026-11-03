import React from 'react';

interface Props {
	color:string;
	onColorChange():void;
}

const Label = (props:Props) => {
	
	const labelStyle:React.CSSProperties = {
		fontFamily:"Arial",
		fontWeight:"bold",
		textAlign:"center"
	}
	return(
		<p style={labelStyle} onClick={props.onColorChange}>{props.color}</p>
	)
}

export default Label;