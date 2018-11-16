import React, { Component } from 'react';
import './App.css';
import Transactions from './Transactions';
import axios from 'axios';

class App extends Component {
  state = {
    transactions: []
  }
  componentDidMount() {
    axios.get(`http://localhost:8080/transactions`)
      .then(res => {
        const transactions = res.data;
        this.setState({ transactions });
      })
  }
  render() {
    return (
      <body>
        <div className="header">
          <h1>My Expenses App</h1>
        </div>
        <div className="main">
          <div className="list">
            <Transactions transactions={this.state.transactions}/>
          </div>
        </div>
      </body>

    );
  }
}

export default App;
