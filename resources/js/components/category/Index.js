import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import List from "./List.js";
import Add from "./Add.js";
import Edit from "./Edit.js";


function Index() {
	
	return(
			<>
				<div>
					<br />
					<Link to="/category" className="btn btn-primary">Listing</Link> &nbsp;
					<Link to="/category/add" className="btn btn-primary">Add</Link>

					<Switch>
						<Route exact path="/category">
							<List />
						</Route>
						<Route path="/category/add">
							<Add />
						</Route>
						<Route path="/category/edit/:id">
							<Edit />
						</Route>
					</Switch>
				</div>
			</>
		);
}

export default Index;