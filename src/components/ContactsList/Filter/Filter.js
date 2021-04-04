import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as phonebookActions from '../../../redux/phonebook/phonebook-actions';
import * as phonebookSelectors from '../../../redux/phonebook/contacts-selectors';

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
  inputFilterName: phonebookSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: e => dispatch(phonebookActions.changeFilter(e.target.value)),
});

Filter.propTypes = {
  inputFilterName: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
