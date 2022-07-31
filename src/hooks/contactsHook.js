import { useSelector, useDispatch } from 'react-redux';
import { Operations } from 'redux/contacts';
import { changeFilter } from 'redux/contacts';

// contactsHook
export const useContacts = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const loader = useSelector(state => state.contacts.loader);
  const addLoader = useSelector(state => state.contacts.addLoader);
  const error = useSelector(state => state.contacts.error);
  const dispatch = useDispatch();

  const getContacts = () => {
    dispatch(Operations.getItems());
  };

  const addContact = data => {
    dispatch(Operations.addItem(data));
  };

  const deleteContact = id => {
    dispatch(Operations.deleteItem(id));
  };

  const setFilter = value => {
    dispatch(changeFilter(value));
  };

  return {
    contacts,
    filter,
    loader,
    addLoader,
    error,
    getContacts,
    addContact,
    deleteContact,
    setFilter,
  };
};
