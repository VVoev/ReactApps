import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navigation from '../../routes'


class Header extends React.Component{
    render(){

        return(
            <div className="container-fluid">
                <Navigation/>
            </div>
        )
    }
}

export default  Header;