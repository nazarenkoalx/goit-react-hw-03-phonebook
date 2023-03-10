import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Component } from 'react';
import { Filter } from './Filter/Filter';
import { Container } from './Container/Container.styled';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = { contacts: [], filter: '' };

  componentDidMount() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localContacts) {
      this.setState({ contacts: localContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(
        `nope, ${newContact.name} is already added to contact list =(`
      );
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
      };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  searchContact = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const filterInLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterInLowerCase)
    );
  };

  render() {
    const fileredContacts = this.filterContacts();
    return (
      <Container>
        <ContactForm onSubmit={this.addContact} />
        <Filter onChange={this.searchContact} contacts={fileredContacts} />
        <ContactList contacts={fileredContacts} onDelete={this.deleteContact} />
      </Container>
    );
  }
}
