import React from 'react';
import PropTypes from 'prop-types';


class Modal extends React.Component {
  state = {
    name: null,
    amount: null,
    currency: 'PLN',
    category: {
        id: 12,
        name: 'education'
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTransaction(this.state);
  }
  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
  }
  render() {
    if(!this.props.show) {
      return null;
    }
    return (
      <div className="backdrop">
        <div className="modal">
          <div className="form">
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="name" onChange={this.handleChange}/>
              <input type="text" placeholder="amount" onChange={this.handleChange}/>
              <select>
                <option value="PLN">PLN</option>
              </select> 
              <select>
                <option value="education">education</option>
              </select> 
            </form>
          </div>
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