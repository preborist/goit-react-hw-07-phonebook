import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as phonebookOperations from '../../redux/phonebook/phonebook-operations';
import './InputPhonebookForm.scss';
import * as phonebookSelectors from '../../redux/phonebook/contacts-selectors';

class InputPhonebookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts } = this.props;
    if (name && number) {
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
        ? alert(`${name} is already in contacts`)
        : this.props.addNewContact(name, number);
      this.setState({
        name: '',
        number: '',
      });
    } else {
      alert('Please enter a contact name or phone number!');
    }
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form className="InputPhonebookForm" onSubmit={this.handleSubmit}>
          <label>
            <span className="label">Name</span>
            <input
              onChange={this.handleInputChange}
              name="name"
              type="text"
              value={name}
            />
          </label>
          <label>
            <span className="label">Number</span>
            <input
              onChange={this.handleInputChange}
              name="number"
              type="number"
              value={number}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: phonebookSelectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  addNewContact: (name, number) =>
    dispatch(phonebookOperations.addNewContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputPhonebookForm);
