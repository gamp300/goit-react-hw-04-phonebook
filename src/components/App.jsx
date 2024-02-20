import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { FilterContainer } from './Filter.styled';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const filteredContacts = () => {
    return contacts.filter(contact => {
      if (contact.name && filter) {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
      }
      return false;
    });
  };

  const handleAddContact = () => {
    if (name.trim() === '' || number.trim() === '') {
      alert('Por favor, ingrese tanto el nombre como el número.');
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert('¡El contacto ya existe!');
    } else {
      setContacts([...contacts, newContact]);
      setName('');
      setNumber('');
    }
  };

  const handleDeleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <FilterContainer>
        <h1>Agenda Telefónica</h1>
        <ContactForm
          name={name}
          number={number}
          handleInputChange={handleInputChange}
          handleAddContact={handleAddContact}
        />
        <h2>Contactos</h2>
        <ContactList
          contacts={contacts}
          handleDeleteContact={handleDeleteContact}
        />
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
        <ContactList
          contacts={filteredContacts()}
          handleDeleteContact={handleDeleteContact}
        />
      </FilterContainer>
    </div>
  );
};
