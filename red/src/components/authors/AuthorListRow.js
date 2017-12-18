import React from 'react';

const AuthorListRow = ({author})=>{
    return(
        <tr>
            <td>{author.id}</td>
            <td>{author.firstName}</td>
            <td>{author.lastName}</td>
        </tr>
    )
}

export default AuthorListRow;