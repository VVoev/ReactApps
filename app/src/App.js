import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'

let Header = React.createClass({
    render:function () {
        return(
            <div>
                <h1>Header</h1>
                <Link to="/catalog">Catalog</Link>
                <Link to="/about">About</Link>
            </div>
        )
    }
})

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
      </div>
    );
  }
}

export default App;
