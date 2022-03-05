import React from 'react';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { Header, SecondHeader } from '../Header/Header';
import Contacts from '../Contacts/Contacts';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import { Wrapper } from './App.styled';
import { GlobalStyle } from './App.styled';
import { addContact, removeContact } from 'redux/sliceContacts/sliceContacts';
import { changeFilter } from 'redux/sliceFilter/sliceFilter';

const contactId = nanoid();
const numberId = nanoid();

const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const filteredContacts = getFilteredContacts();

  const onHandleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const contactName = event.target.elements.name.value;
    const contactPhone = event.target.elements.number.value;
    const isNameInContacts = contacts.find(
      element => element.name === contactName
    );

    if (isNameInContacts) {
      const notify = () => toast.error(`${contactName} has been added already`);

      notify();
      form.reset();
      return;
    }

    const newContact = { id: nanoid(), name: contactName, number: contactPhone };

    dispatch(addContact(newContact));
    form.reset();
  };

  const onSearchInput = event => {
    const inputValue = event.target.value;

    dispatch(changeFilter(inputValue));
  };

  function getFilteredContacts() {
    const normalizedFilter = filter.toLowerCase();
    const flatContacts = contacts.flat(Infinity);

 const filteredContacts = flatContacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );  

    return filteredContacts;
  }

  const deleteContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <Wrapper>
      <Header />
      <ContactForm
        contactId={contactId}
        numberId={numberId}
        handleSubmit={onHandleSubmit}
      />
      <SecondHeader>Contacts</SecondHeader>
      <Filter onSearchInput={onSearchInput} value={filter} />
      <Contacts
        contacts={contacts}
        filteredContacts={filteredContacts}
        deleteContact={deleteContact}
      />
      <GlobalStyle />
      <Toaster />
    </Wrapper>
  );
};

export default App;
