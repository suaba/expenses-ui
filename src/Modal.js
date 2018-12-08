import React from 'react';
import PropTypes from 'prop-types';


class Modal extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      name: 'TestTransaction2222',
      amount: 15,
      currency: 'PLN',
      category: {
          id: 12,
          name: 'education'
      }
    }
    this.props.addTransaction(transaction);
  }
  render() {
    if(!this.props.show) {
      return null;
    }
  
    return (
      <div className="backdrop">
        <div className="modal">
          {this.props.children}
          <div className="footer">
            <button className="forTest" onClick={this.handleSubmit}>
            Test
            </button>
            <button onClick={this.props.onClose}>
            Close
            </button>
          </div>
        </div>
      </div>
      );
    }
  }
  
  Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
  };
  
  export default Modal;