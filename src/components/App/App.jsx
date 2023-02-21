import { useState, useEffect } from 'react';
import { GlobalStyle } from '../../GlobalStyle';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Container } from './App.styled';
import { Filter } from 'components/Filter/Filter';

const startContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? startContacts
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const isOnList = contacts.find(({ name }) =>
      name.toLowerCase().includes(newContact.name.toLowerCase())
    );

    if (isOnList) {
      return alert(`${newContact.name} is aldeady in contacts`);
    }

    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normolizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizedFilter)
    );
  };

  const deleteContact = contactId => {
    // setContacts(prevContacts => [newContact, ...prevContacts]);
    // setContacts(prevContacts => [newContact, ...prevContacts]);
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <Container>
        <ContactForm onSubmit={addContact} />
      </Container>

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactsList
        onDeleteContact={deleteContact}
        contacts={getVisibleContacts()}
      />
    </>
  );
};
