import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import Plan from './Plan'



class App extends Component {
  state={
    items:[],
    text:""
  }
  handleChange= e =>{
    this.setState({text: e.target.value})
  }
  handleAdd= e=>{
    if (this.state !==""){
      const items = [...this.state.items, this.state.text];
      this.setState({items: items, text:""});
    }
  }
  handleDelete= id =>{
    console.log("Deleted", id)
    const olditems =[...this.state.items]
    console.log("olditems",olditems);
    const items =olditems.filter((element,i)=>{
      return i!== id
    })
    console.log("Newitems",items)
    this.setState({items: items});
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 mx-auto">
            <h1 className="text-center mx-auto text-white pt-4 pb-4">TODO APP</h1>
            <div className="row">
            <div className="col-9 text-light">
              <input type="text" className="form-control text-light" placeholder='My Daily Workflow...'
              value={this.state.text} onChange={this.handleChange} />
            </div>
            <div className="col-3 ">
              <button className="btn btn-warning text-bold"
              onClick={this.handleAdd}>Add</button>
            </div>
            <div className="container-fluid bg-transparent">
              <ul className="list-unstyled row m-5 text-light">
                  {
                    this.state.items.map((value, i)=>{
                      return<Plan value={value} key={i} id={i} sendData={this.handleDelete} />
                    })
                  }
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;