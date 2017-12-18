import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CourseForm from './CourseForm';
import * as courseActions from '../../actions/courseActions'

class ManageCoursePage extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.state = {
            course:Object.assign({},this.props.course),
            errors:{}
        }
        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    updateCourseState(event){
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({course:course})
    }
    saveCourse(event){
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
    }

    render() {

        return (
            <div>
                <CourseForm course={this.state.course} errors={this.state.errors} allAuthors={this.props.authors}
                onChange={this.updateCourseState} onSave={this.saveCourse}
                />
            </div>
        )
    }
}

function getCourseById(courses,id) {
    const course = courses.filter(course=>course.id === id);
    if(course.length){
        return course[0];
    }
    return null;
}

function mapStateToProps(state,ownProps) {
    let course = {id:'',watchHref:'',title:'',authorId:'',length:'',category:''};
    let courseId = ownProps.match.params.id;
    if(courseId.length){
        course = getCourseById(state.courses,courseId);
    }
    const authorDropDown = state.authors.map(author=>{
        return{
            value:author.id,text:author.firstName + author.lastName
        }
    })
    debugger;
    return{
        course:course,
        authors:authorDropDown
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);