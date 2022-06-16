import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 mx-auto">
            <h1 className="text-center mx-auto text-white pt-4 pb-4">TODO APP</h1>
            <div className="row">
            <div className="col-9 text-light">
              <input type="text" className="form-control text-light" placeholder='My Daily Workflow...' />
            </div>
            <div className="col-3 ">
              <button className="btn btn-warning text-bold">Add</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;