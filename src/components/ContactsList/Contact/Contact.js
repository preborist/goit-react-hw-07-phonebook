import React from 'react';
import PropTypes from 'prop-types';
import './Contact.scss';

const Contact = ({ id, name, number, onHandleDelete }) => (
  <div className="Contact" key={id}>
    <span className="name">{name}:</span>
    <span className="number">{number}</span>
    <button type="button" onClick={() => onHandleDelete(id)}>
      Delete
    </button>
  </div>
);

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onHandleDelete: PropTypes.func.isRequired,
};

export default Contact;
