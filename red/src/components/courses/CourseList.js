import React from 'react';
import CourseListRow from './CourseListRow';

import { Link } from 'react-router-dom';



const CourseList = ({courses}) => {
    function changeUrl(e) {
        e.preventDefault();

    }
    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th>Links</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                </tr>
                {courses.map(course =>
                    <CourseListRow key={course.id} course={course}/>
                )}
                </thead>
            </table>
            <Link to='createcourse'>
                <p className="btn btn-success">Add New Course</p>
            </Link>
        </div>
    )
}

export default CourseList;