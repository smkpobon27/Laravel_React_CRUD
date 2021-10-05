import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Category from "./category/Index.js";
import List from "./category/List.js";
import Add from "./category/Add.js";
import Edit from "./category/Edit.js";
import Error404 from "./pages/Error404.js";


function Header(){

	return(
				 <div>
				 <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
				  <a className="navbar-brand" href="#">Navbar</a>

				  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul className="navbar-nav mr-auto">
				      <li className="nav-item">
				        <Link className="nav-link" to="/">Home</Link>
				      </li>
				      <li className="nav-item">
				        <Link className="nav-link" to="/about">About</Link>
				      </li>
				      <li className="nav-item">
				        <Link className="nav-link" to="/categories">Categories</Link>
				      </li>
				    </ul>
				    <form className="form-inline my-2 my-lg-0">
				      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
				      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				    </form>
				  </div>
				</nav>


		         <Switch>
			          <Route exact path="/">
			            <Home />
			          </Route>
			          <Route path="/about">
			            <About />
			          </Route>
			          <Route exact path="/categories">
			            <Category />
			          </Route>
			         <Route exact path="/category">
			         	<Category />
			         </Route>
			         <Route exact path="/category/add">
			         	<Category />
			         </Route>
			         <Route exact path="/category/edit/:id">
			         	<Category />
			         </Route>
			         <Route exact path="/*">
			         	<Error404 />
			         </Route>
		        </Switch>
		        </div>
		);
}

export default Header;