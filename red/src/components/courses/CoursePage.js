import React from 'react';
import CourseList from './CourseList'
import CourseForm from './CourseForm'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions'

class CoursePage extends React.Component{
    constructor(props){
        super(props);
        this.redirectToAddCourse = this.redirectToAddCourse.bind(this);
    }

    redirectToAddCourse(){

    }
    render(){
        const courses = this.props.courses;
        return(
            <div>
                <CourseList courses={courses}/>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);