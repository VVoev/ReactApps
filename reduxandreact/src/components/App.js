import React,{PropTypes } from "react";
import Header from '../components/common/Header'

class App extends React.Component{

    render(){

        return(
            <div className="container-fluid">
                <Header/>
            </div>
        )
    }
}

App.PropTypes = {
    children : PropTypes.object.isRequired
};

export default App;