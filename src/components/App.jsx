import React, { Component } from 'react';
import { MainContainer } from './App.styled';
import { nanoid } from 'nanoid';
import ContactInputSection from './ContactInput';
import ContactListSection from './ContactList';

// import ContactItem from './ContactList/Contact';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  handleFormSubmit = data => {
    const alreadyExist = this.state.contacts.find(el => el.name === data.name);
    const contact = { id: nanoid(), name: data.name, number: data.number };
    alreadyExist
      ? alert(`${data.name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  // countContacts = () => {
  //   this.state.contacts.length;
  // };

  render() {
    const totalContacts = this.state.contacts.length;
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <MainContainer>
        <ContactInputSection onSubmit={this.handleFormSubmit} />
        {!totalContacts ? (
          <p>Add contact to your phonebook</p>
        ) : (
          <ContactListSection
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
            value={filter}
            onChange={this.changeFilter}
          />
        )}
      </MainContainer>
    );
  }
}
export default App;
