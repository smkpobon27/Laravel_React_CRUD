import React from "react";


function SuccessAlert(props){

	return(
			<div className="alert alert-success" role="alert">
			  {props.msg}
			</div>
		);
}

export default SuccessAlert;