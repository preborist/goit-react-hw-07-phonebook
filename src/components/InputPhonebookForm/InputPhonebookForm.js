import React from 'react';
import PropTypes from 'prop-types';
import './InputPhonebookForm.scss';

const InputPhonebookForm = ({
  handleInputChange,
  handleSubmit,
  inputName,
  inputNumber,
}) => {
  return (
    <>
      <form className="InputPhonebookForm" onSubmit={handleSubmit}>
        <label>
          <span className="label">Name</span>
          <input
            onChange={handleInputChange}
            name="name"
            type="text"
            value={inputName}
          />
        </label>
        <label>
          <span className="label">Number</span>
          <input
            onChange={handleInputChange}
            name="number"
            type="number"
            value={inputNumber}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

InputPhonebookForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  inputName: PropTypes.string.isRequired,
  inputNumber: PropTypes.string.isRequired,
};

export default InputPhonebookForm;
