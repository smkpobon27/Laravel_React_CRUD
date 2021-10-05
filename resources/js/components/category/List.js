import React, {useState, useEffect} from "react";
import axios from "axios";
import Moment from 'react-moment';
import {useHistory,Link} from "react-router-dom";
import Pagination from "react-js-pagination";
import SuccessAlert from "./SuccessAlert.js";
import ErrorAlert from "./ErrorAlert.js";


function List(){

	const [categories, setCategories] = useState([]);
	const history = useHistory();
	const [activePage, setActivePage] = useState(1);
	const [itemsCountPerPage, setItemsCountPerPage] = useState(0);
	const [totalItemsCount, setTotalItemsCount] = useState(0);
	const [message, setMessage] = useState("");

	useEffect(()=>{
		axios.get('http://127.0.0.1:8000/api/categories')
		  .then(function (response) {
		  	console.log(response.data);
		  	setCategories(response.data.data);
		  	setActivePage(response.data.current_page);
		    setTotalItemsCount(response.data.total);
		    setItemsCountPerPage(response.data.per_page);
		  })
		  .catch(function (error) {
		    // handle error
		    console.log(error);
		  });

	}, []);

		function handlePageChange(pageNumber) {
		    console.log(`active page is ${pageNumber}`);
		    console.log('length: '+categories.length);
		    
		    axios.get('http://127.0.0.1:8000/api/categories?page='+pageNumber)
		      .then(function (response) {
		      	console.log(response.data);
		      	
		      	setCategories(response.data.data);
		    	setActivePage(response.data.current_page);
		    	setTotalItemsCount(response.data.total);
		    	setItemsCountPerPage(response.data.per_page);
		      
		      });
		  }
	
		function handleDelete(category_id){

			console.log(category_id);

			axios.delete('http://127.0.0.1:8000/api/categories/delete/'+category_id)
				.then((response)=>{
					console.log(response.data);
					//setCategories(response.data);
					setCategories(response.data.data);
			    	setActivePage(response.data.current_page);
			    	setTotalItemsCount(response.data.total);
			    	setItemsCountPerPage(response.data.per_page);
					setMessage("success");
				})
				.catch((e)=>{
					setMessage("error");
				});
		}

	return(
			<>
			{message==="success" ? <SuccessAlert msg={"Category deleted succeddfully."}/> : null}
			{message==="error" ? <ErrorAlert msg={"Error occurred while deleting category."}/> : null}

				<table className="table">
				  <thead>
				    <tr>
				      <th scope="col">SL.</th>
				      <th scope="col">Name</th>
				      <th scope="col">Status</th>
				      <th scope="col">Created at</th>
				      <th scope="col">Updated at</th>
				      <th scope="col">Edit</th>
				      <th scope="col">Delete</th>
				    </tr>
				  </thead>
				  <tbody>
				  {
				  	categories.map((category, index)=>{
				  		return(
				  				<tr key={index}>
							      <th scope="row">{index+1}</th>
							      <td>{category.name}</td>
							      <td>{category.active ? "Active":"Inactive"}</td>
							      <td><Moment format="DD-MMM-YYYY">{category.created_at}</Moment></td>
							      <td><Moment format="DD-MMM-YYYY">{category.updated_at}</Moment></td>
							      <td><Link className="btn btn-primary" to={`/category/edit/${category.id}` }>Edit</Link></td>
							      <td><a className="btn btn-danger" onClick={()=>handleDelete(category.id)}>Delete</a></td>
				   			 	</tr>
				  			)
				  	})
				  }
				  </tbody>
				</table>
				<div className="d-flex justify-content-center">
					<Pagination
					          activePage={activePage}
					          itemsCountPerPage={itemsCountPerPage}
					          totalItemsCount={totalItemsCount}
					          pageRangeDisplayed={5}
					          onChange={handlePageChange}
					          itemClass="page-item"
					          linkClass="page-link"
					        />
				</div>
			</>
		);
}

export default List;