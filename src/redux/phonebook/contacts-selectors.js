import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.phonebook.contacts;
export const getFilter = state => state.phonebook.filter;
export const getLoading = state => state.phonebook.loading;

// export const getFilteredContacts = state => {
//   const normalizedFilter = getFilter(state).toLowerCase();
//   return getContacts(state).filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);
