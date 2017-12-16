import React from 'react';
import {Link} from 'react-router-dom'

const CourseListRow = ({course})=>{
    return(
        <tr>
            <td><a href={course.watchHref}>Watch</a></td>
            <td><a href={`course/${course.id}`}>{course.title}</a></td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
        </tr>
    )
}

export default CourseListRow;
