import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import { ContactForm } from "./ContactForm/ContactForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";

import contactsData from '../data/contacts-data';


export const App = () => {
  const [contacts, setContacts] = useState(() => {return JSON.parse(localStorage.getItem('contacts')) ?? contactsData;});
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const handleSubmit = (name, number) => {
    const contact = {id: nanoid(), name, number,}

    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      return alert(`${name} is already in contacts.`);
    }

    setContacts([contact, ...contacts]);
  };

  const handleFilter = e => {
    setFilter(e.currentTarget.value)
  };

  const handleDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
    setFilter('');
  };

  const handleFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = handleFilterContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handleSubmit}/>

        <h2>Contacts</h2>
        <Filter onFilter={handleFilter} filter={filter}/>
        <ContactsList
          onDelete={handleDelete}
          filterContacts={filteredContacts}/>
      </>
      
    )
};
