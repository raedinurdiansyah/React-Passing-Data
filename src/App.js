import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Welcome from './component/Welcome';



class App extends Component {
  constructor() {
    super();
    this.state = { user: '' };
  }

  submit() {
    this.setState({ user: this.refs.nama.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> React State and Props (Passing Data) </h1>
        </header>



        <div className="container-fluid col-md-6">

          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#welcome">Welcome</a>
            </li>
          </ul>

          <div className="tab-content">
            <div id="login" className="container tab-pane active"> <br />
              <h3> Name: </h3>
              <input type="text" className="form-control" ref="nama" placeholder="Put your name here" /> <br />
              <button type="button" className="btn btn-info" onClick={() => { this.submit(); }}> Submit </button>

            </div>
            <div id="welcome" className="container tab-pane fade"> <br />
              <Welcome id={this.state.user}/>
            </div>
          </div>

        </div>


      </div>
    );
  }
}

export default App;
