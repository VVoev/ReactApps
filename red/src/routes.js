import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HomePage from '../src/components/home/HomePage';
import AboutPage from '../src/components/about/AboutPage';
import CoursePage from '../src/components/courses/CoursePage';
import ManageCoursePage from '../src/components/courses/ManageCoursePage';
import AuthorPage from '../src/components/authors/AuthorPage';
import CreateNewCourse from '../src/components/courses/CreateNewCourse';


export default class Navigation extends  Component{
    render(){
        return(
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/authors">Authors</Link></li>
                    </ul>
                    <hr style={{ backgroundColor: 'black',    height: '1em' }}/>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/courses" component={CoursePage} />
                    <Route path="/course/:id" component={ManageCoursePage} />
                    <Route path="/authors" component={AuthorPage} />
                    <Route path="/createcourse" component={CreateNewCourse} />
                </div>
            </Router>
        )
    }
}