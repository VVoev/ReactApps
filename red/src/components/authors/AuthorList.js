import React from 'react';
import AuthorListRow from './AuthorListRow';


const AuthorList = ({authors}) => {
    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>FirstName</th>
                    <th>Lastname</th>
                </tr>
                {authors.map(author =>
                    <AuthorListRow key={author.id} author={author}/>
                )}
                </thead>
            </table>
        </div>
    )
}

export default AuthorList;
