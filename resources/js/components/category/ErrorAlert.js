import React from "react";


function ErrorAlert(props){

	return(
			<div className="alert alert-danger" role="alert">
			  {props.msg}
			</div>
		);
}

export default ErrorAlert;