import React, { Component } from 'react';
import './App.css';
import Transactions from './Transactions';
import axios from 'axios';
import Modal from './Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      isOpen: false
    }
  }
  fetchAllTransactions = () => {
    axios.get(`http://localhost:8080/api/transactions`)
      .then(res => {
        const transactions = res.data;
        this.setState({ transactions });
      })
  }
  componentDidMount = () => {
    this.fetchAllTransactions();
  }
  deleteTransaction = (id) => {
    axios.delete(`http://localhost:8080/api/transactions/${id}`)
    .then(res => {
      const transactions = res.data;
      this.setState({ transactions });
    })
  }
  addTransaction = (transaction) => {
    axios.post(`http://localhost:8080/api/transactions/`, transaction);
    this.fetchAllTransactions();
  }
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <body>
        <div className="header">
          <h1>My Expenses App</h1>
        </div>
        <div className="main">
          <div className="list">
            <Transactions transactions={this.state.transactions} onClick={this.deleteTransaction}/>
          </div>
          <button className="create" onClick={this.toggleModal}>
          Add transaction
          </button>
          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}
            addTransaction={this.addTransaction}>
            Place for form
          </Modal>
        </div>
      </body>

    );
  }
}

export default App;
