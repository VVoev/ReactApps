import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../../actions/courseActions';
import CourseForm from '../CourseForm'


class ManagerCoursePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        };
        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        this.setState({course:course});
    }

    saveCourse(event){
        event.preventDefault();
        this.props.actions.saveCourses(this.state.course);
        debugger;
    }

    render() {

        return (
            <CourseForm course={this.state.course}
                        errors={this.state.errors}
                        onSave={this.saveCourse}
                        allAuthors={this.props.authors}
                        onChange={this.updateCourseState}
            />
        )
    }
}

function getCourseById(cources,id) {
    const course = cources.filter(course => course.id === id);
    if(course.length>=0){
        return course[0];
    }
    return null;
}

function mapStateToProps(state, ownProps) {
    debugger;
    const courseId = ownProps.match.params.id;
    let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

    if(courseId){
        course = getCourseById(state.courses,courseId);
    }
    const authorsForDropDown = state.authors.map(author => {
        return {
            value: author.id,
            text: `${author.firstName} ${author.lastName}`
        }
    })
    debugger;
    return {
        course: course,
        authors: authorsForDropDown
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagerCoursePage);