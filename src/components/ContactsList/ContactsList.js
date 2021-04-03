import React from 'react';
import Contact from './Contact';
import Filter from './Filter';
import PropTypes from 'prop-types';
import './ContactList.scss';

const ContactsList = ({
  contacts,
  // inputFilterName,
  // changeFilter,
  onHandleDelete,
}) => {
  return (
    <>
      {/* <Filter inputFilterName={inputFilterName} changeFilter={changeFilter} /> */}
      <Filter />
      <ul className="ContactList">
        {contacts.map(({ id, name, number }) => (
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
  contacts: PropTypes.array.isRequired,
  inputFilterName: PropTypes.string,
  changeFilter: PropTypes.func,
  onHandleDelete: PropTypes.func,
};

export default ContactsList;
