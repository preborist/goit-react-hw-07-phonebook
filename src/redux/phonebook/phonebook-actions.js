import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addNewContactRequest = createAction(
  'contacts/addNewContactRequest',
);
export const addNewContactSuccess = createAction(
  'contacts/addNewContactSuccess',
);
export const addNewContactError = createAction('contacts/addNewContactError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('phonebook/ChangeContactsFilter');
