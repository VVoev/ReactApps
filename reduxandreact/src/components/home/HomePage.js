import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class HomePage extends React.Component{
    render(){

        return(
            <div className="jumbotron">
                <h1>PluralSight Demo</h1>
                <p>React Redux and React Rounter in ES6</p>
                <Link to="about" className="btn btn-primary"> Learn More </Link>
            </div>
        )
    }
}

export default  HomePage;