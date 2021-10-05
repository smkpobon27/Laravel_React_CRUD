import React, {useState, useEffect} from "react";
import axios from "axios";
import {useHistory,useParams} from "react-router-dom";
import SuccessAlert from "./SuccessAlert.js";
import ErrorAlert from "./ErrorAlert.js";

function Edit(){

	const [categoryName, setCategoryName] = useState("");
	const [categoryObject, setCategoryObject] = useState({category_name:""});
	const history = useHistory();
	const { id } = useParams();
	const [message, setMessage] = useState("");

	function handleChange(e){
		console.log(e);
		setCategoryName(e.target.value);
		setCategoryObject({category_name: e.target.value});
	}
	function handleSubmit(e){
		e.preventDefault();
		console.log(categoryName);
		console.log(categoryObject);

		axios.put('http://127.0.0.1:8000/api/categories/update/'+id, categoryObject)
			.then((response)=>{
				console.log(response);
				//history.replace("/category");
				setMessage("success");
			})
			.catch((e)=>{
				setMessage("error");
			});
	}
	
	useEffect(()=>{
		console.log("from edit-"+id);
		axios.get('http://127.0.0.1:8000/api/categories/edit/'+id)
			.then((response)=>{
				console.log(response.data);
				setCategoryName(response.data.name);
				setCategoryObject({category_name: response.data.name});
			})
	},[]);

	return(
			<>
			{message==="success" ? <SuccessAlert msg={"Category updated succeddfully."}/> : null}
			{message==="error" ? <ErrorAlert msg={"Error occurred while updating category."}/> : null}

			<form onSubmit={handleSubmit}>
			  <div className="form-group col-lg-6">
			    <label htmlFor="name">Edit Category Name</label>
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

export default Edit;