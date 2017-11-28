import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter,Route } from 'react-router-dom'

let Catalogue = React.createClass({
    render(){
        return(
            <div>Catalogue Page</div>
        )
    }
})

let About = React.createClass({
    render(){
        return(
            <div>About Page</div>
        )
    }
})


ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route path="/" component={App}/>
            <Route path="/catalog" component={Catalogue}/>
            <Route path="/about" component={About}/>
        </div>
    </BrowserRouter>
), document.getElementById('root'))

