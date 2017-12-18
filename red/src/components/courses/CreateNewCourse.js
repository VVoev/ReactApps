import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions'


class CreateNewCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses:Object.assign({},this.props.courses)
        }
        this.saveCourse = this.saveCourse.bind(this);
    }

    saveCourse(e) {
        e.preventDefault();
        const link = document.getElementById('link').value;
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const category = document.getElementById('category').value;
        const length = document.getElementById('length').value;

        const course = {
            link: link,
            title: title,
            author: author,
            category: category,
            length: length
        }
        this.props.actions.saveCourse(course);
        debugger;
    }

    render() {
        return (

            <form onSubmit={this.saveCourse}>
                <div className="container">
                    <h2>Add New Course</h2>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Links</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Category</th>
                            <th>Length</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th><input type="text" id="link"/></th>
                            <th><input type="text" id="title"/></th>
                            <th><input type="text" id="author"/></th>
                            <th><input type="text" id="category"/></th>
                            <th><input type="text" id="length"/></th>
                        </tr>
                        </tbody>
                    </table>
                    <button className="btn btn-success">Add</button>
                </div>
            </form>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch) {
    debugger;
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}


export default connect(mapStateToProps)(CreateNewCourse);
