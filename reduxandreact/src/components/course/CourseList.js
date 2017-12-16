import React from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses}) => {
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
        </div>
    )
}

export default CourseList;
