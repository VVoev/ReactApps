import React from 'react';
import AuthorList from './AuthorList'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class AuthorPage extends React.Component{
    render(){
        const authors = this.props.authors;
        return(
            <div>
                <h3>Authors</h3>
                <AuthorList authors={authors}/>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        authors: state.authors
    }
}


export default connect(mapStateToProps)(AuthorPage);
