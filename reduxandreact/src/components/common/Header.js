import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Header extends React.Component{
    render(){

        return(
            <nav>
                <Link to="/" activeClassName="active">Home</Link>
                <Link to="/about" activeClassName="active">About</Link>
                <Link to="/courses" activeClassName="active">Courses</Link>
            </nav>
        )
    }
}

export default  Header;