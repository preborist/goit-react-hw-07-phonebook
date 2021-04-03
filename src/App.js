import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchContacts,
  addNewContact,
  deleteContact,
  // changeFilter,
} from './redux/phonebook/phonebook-operations';

import InputPhonebookForm from './components/InputPhonebookForm';
import ContactsList from './components/ContactsList';
import Container from './components/Container';

class App extends Component {
  state = {
    name: '',
    number: '',
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    if (name && number) {
      this.props.phonebook.contacts.some(
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

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleChangeFilter = e => {
    const { changeFilter } = this.props;
    if (e.currentTarget.value !== '') {
      changeFilter(e.currentTarget.value);
    } else {
      changeFilter('');
    }
  };

  render() {
    const { name, number } = this.state;
    const { filter, contacts } = this.props.phonebook;

    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <Container>
        <h1>Phonebook</h1>
        <InputPhonebookForm
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          inputName={name}
          inputNumber={number}
        />
        <h2>Contacts</h2>
        {this.props.isLoadingContacts && <h2>Загружаем...</h2>}
        {contacts.length > 0 && (
          <ContactsList
            contacts={filteredContacts}
            onHandleDelete={this.props.deleteContact}
            // inputFilterName={filter}
            // changeFilter={this.handleChangeFilter}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  phonebook: state.phonebook,
  isLoadingContacts: state.phonebook.loading,
});

export default connect(mapStateToProps, {
  fetchContacts,
  addNewContact,
  deleteContact,
  // changeFilter,
})(App);
