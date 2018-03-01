import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUserName: '',
      txtPassword: '',
      txtDesc:''
    }
  }
  _onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;

    this.setState({
      [name]: value
    })

  }
  _onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }
  render() {
    return (
      <div className="App">

        <div className="container">

          <div className="row">

            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">

              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Form</h3>
                </div>
                <div className="panel-body">

                  <form onSubmit={this._onSubmit}>

                    <div className="form-group">
                      <label >Username</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Input field"
                        name="txtUserName"
                        onChange={this._onHandleChange} />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="text"
                        className="form-control"
                        name="txtPassword"
                        placeholder="Input field" 
                        onChange={this._onHandleChange}/>
                    </div>
                    <label>Description</label>
                    <div className="form-group">
                      
                      <div className="col-sm-12">
                        <textarea 
                        className="form-control" 
                        rows="3" 
                        required="required"
                        name="txtDesc"
                        onChange={this._onHandleChange}></textarea>
                      </div>
                    </div>
                    
                    <select   className="form-control" required="required">
                      <option value={0}>Nam</option>
                      <option value={1}>Nữ</option>
                    </select>
                    
                    <br/>


                    <button type="submit" className="btn btn-primary">Submit</button>&nbsp;

                      <button type="submit" className="btn btn-warning">Clear</button>
                  </form>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default App;
