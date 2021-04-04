import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from './redux/phonebook/phonebook-operations';

import InputPhonebookForm from './components/InputPhonebookForm';
import ContactsList from './components/ContactsList';
import Container from './components/Container';
import * as phonebookSelectors from './redux/phonebook/contacts-selectors';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts } = this.props;

    return (
      <Container>
        <h1>Phonebook</h1>
        <InputPhonebookForm />
        <h2>Contacts</h2>
        {this.props.isLoadingContacts && <h2>Загружаем...</h2>}
        {contacts.length > 0 && <ContactsList />}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  contacts: phonebookSelectors.getContacts(state),
  isLoadingContacts: phonebookSelectors.getLoading(state),
});

export default connect(mapStateToProps, { fetchContacts })(App);
