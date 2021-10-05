import "../../css/style.css";
import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header.js";
import Footer from "./Footer.js";
import {BrowserRouter as Router} from "react-router-dom";

function Index() {
    return (
        <div className="container">
            <Header />
            
            <Footer />
        </div>
    );
}

export default Index;

if (document.getElementById('root')) {
    ReactDOM.render(<Router> <Index /> </Router>, document.getElementById('root'));
}
