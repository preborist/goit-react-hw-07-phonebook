import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  addNewContactRequest,
  addNewContactSuccess,
  addNewContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './phonebook-actions';

const contactsReducer = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addNewContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addNewContactRequest]: () => true,
  [addNewContactSuccess]: () => false,
  [addNewContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loading: loading,
});
