import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as phonebookActions from '../../../redux/phonebook/phonebook-actions';

const Filter = ({ inputFilterName, onChangeFilter }) => {
  return (
    <label>
      Find contacs by name{' '}
      <input
        name="filter"
        type="text"
        value={inputFilterName}
        onChange={onChangeFilter}
      />
    </label>
  );
};

const mapStateToProps = state => ({
  inputFilterName: state.phonebook.filter,
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: e => dispatch(phonebookActions.changeFilter(e.target.value)),
});

Filter.propTypes = {
  inputFilterName: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
