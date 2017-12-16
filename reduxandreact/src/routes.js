import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import App from '../src/components/App';
import HomePage from '../src/components/home/HomePage';
import AboutPage from '../src/components/about/AboutPage';
import CoursePage from '../src/components/course/CoursePage'
import ManageCoursePage from '../src/components/course/container/ManageCoursePage'

export default class Navigation extends  Component{
    render(){

        return(
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/courses">Course</Link></li>
                    </ul>
                    <hr />
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/course/:id" component={ManageCoursePage} />
                    <Route path="/courses" component={CoursePage} />
                    <Route path="course" component={ManageCoursePage} />
                </div>
            </Router>
        )
    }
}