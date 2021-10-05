import React, {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import SuccessAlert from "./SuccessAlert.js";
import ErrorAlert from "./ErrorAlert.js";

function Add(){

	const [categoryName, setCategoryName] = useState("");
	const [categoryObject, setCategoryObject] = useState({category_name:""});
	const history = useHistory();
	const [message, setMessage] = useState("");

	function handleChange(e){
		setCategoryName(e.target.value);
		setCategoryObject({...categoryObject, [e.target.name]: e.target.value});
	}
	function handleSubmit(e){
		e.preventDefault();
		console.log(categoryName);
		console.log(categoryObject);
		
		axios.post('http://127.0.0.1:8000/api/categories', categoryObject)
			.then((response)=>{
				console.log(response);
				//history.replace("/category");
				setMessage("success");
			})
			.catch((e)=>{
				setMessage("error");
			});
	}
	return(
			<>
			{message==="success" ? <SuccessAlert msg={"Category added succeddfully."}/> : null}
			{message==="error" ? <ErrorAlert msg={"Error occurred while adding category."}/> : null}

			<form onSubmit={handleSubmit}>
			  <div className="form-group col-lg-6">
			    <label htmlFor="name">Category Name</label>
			    <input  type="text" 
			    		className="form-control" 
			    		id="name" 
			    		name="category_name" 
			    		placeholder="Enter Name"
			    		value={categoryName}
			    		onChange={handleChange} />
			   
			  	<button type="submit" className="btn btn-success">Submit</button>
			  </div>
			</form>
			</>
		);
}

export default Add;