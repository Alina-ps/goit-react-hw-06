import { useEffect, useState } from "react";
import s from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContact = JSON.parse(
      window.localStorage.getItem("saved-contact")
    );

    if (savedContact !== null) {
      return savedContact;
    }

    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.localStorage.setItem("saved-contact", JSON.stringify(contacts));
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleAddContacts = (contact) => {
    setContacts((prevContacts) => [...prevContacts, contact]);
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const foundedContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContacts} />
      <SearchBox value={searchTerm} onChange={handleSearchChange} />
      <ContactList contacts={foundedContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
