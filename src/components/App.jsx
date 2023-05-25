import { Container } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { IsLoading, filteredContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const filteredContactsList = useSelector(filteredContacts);
  const dispatch = useDispatch();
  const loader = useSelector(IsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
        <ContactList />
      {!filteredContactsList.length && !loader && (
        <p>No contacts</p>
      )}
    </Container>
  );
};
