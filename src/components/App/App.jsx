import { Component } from 'react';
// import { nanoid } from 'nanoid';
import { GlobalStyle } from '../../GlobalStyle';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Container } from './App.styled';
import { Filter } from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    const { contacts } = this.state;
    const isOnList = contacts.find(({ name }) =>
      name.toLowerCase().includes(newContact.name.toLowerCase())
    );

    if (isOnList) {
      return alert(`${newContact.name} is aldeady in contacts`);
    }

    this.setState(({ contacts }) => {
      return {
        contacts: [newContact, ...contacts],
      };
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const normolizedFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <Container>
          <ContactForm onSubmit={this.addContact} />
        </Container>

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactsList
          onDeleteContact={this.deleteContact}
          contacts={visibleContacts}
        />
      </>
    );
  }
}
