import React, {PropTypes} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions'

import CourseList from './CourseList'

class CoursePage extends React.Component {
    constructor(props) {
        super(props);
    }


    courseRow(course, index) {
        return (
            <li key={index}>{course.title}</li>
        )
    }

    render() {
        const {courses} = this.props;

        return (
            <div>
                <h1>Courses</h1>
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