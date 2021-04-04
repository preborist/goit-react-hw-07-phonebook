import React from 'react';
import Contact from './Contact';
import Filter from './Filter';
import PropTypes from 'prop-types';
import './ContactList.scss';
import { connect } from 'react-redux';
import * as phonebookOperations from '../../redux/phonebook/phonebook-operations';
import * as phonebookSelectors from '../../redux/phonebook/contacts-selectors';

const ContactsList = ({ filteredContacts, onHandleDelete }) => {
  return (
    <>
      <Filter />
      <ul className="ContactList">
        {filteredContacts.map(({ id, name, number }) => (
          <li className="ContactList__item" key={id}>
            <Contact
              id={id}
              name={name}
              number={number}
              onHandleDelete={onHandleDelete}
            ></Contact>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactsList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
  onHandleDelete: PropTypes.func,
};

const mapStateToProps = state => ({
  filteredContacts: phonebookSelectors.getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onHandleDelete: id => dispatch(phonebookOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
