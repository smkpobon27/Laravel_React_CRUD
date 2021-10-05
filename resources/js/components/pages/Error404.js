import React from "react";
import {Link} from "react-router-dom";

function Error404(){

	return(
			<div className="alert alert-danger">
			 	<h3>404 Page Not Found. <Link to="/" className="alert-link">Back to Home</Link></h3>
			</div>
		);
}

export default Error404;