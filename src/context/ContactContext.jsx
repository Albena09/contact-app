// context API component for contacts

import { createContext, useEffect, useState } from "react";
import axios from "axios";

// Create a Context object for contacts

export const ContactContext = createContext();

// URL of the backend API
// const API_URL = "http://localhost:9000/contacts";
const API_URL = import.meta.env.VITE_API_BASE_URL;
console.log(API_URL);

// Context Provider component

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  // useEffect runs when the component mounts

  useEffect(() => {
    fetchContacts();
  }, []);

  // Function to fetch all contacts from the backend
  const fetchContacts = async () => {
    try {
      // Send GET request to the API
      const res = await axios.get(`${API_URL}/contacts`);
      setContacts(res.data); // Store the response data in state
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  // Function to add a new contact
  const addContact = async (contact) => {
    try {
      const res = await axios.post(`${API_URL}/contacts`, contact);
      setContacts((prev) => [...prev, res.data]);
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };
  // Function to update an existing contact
  const updateContact = async (contact) => {
    try {
      const res = await axios.put(`${API_URL}/contacts/${contact.id}`, contact);
      setContacts((prev) =>
        prev.map((contacts) =>
          contacts.id === contact.id ? res.data : contacts,
        ),
      );
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };
  // Function to delete a contact
  const deleteContact = async (id) => {
    try {
      await axios.delete(`${API_URL}/contacts/${id}`);
      setContacts((prev) => prev.filter((contacts) => contacts.id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <ContactContext.Provider
      value={{ contacts, addContact, updateContact, deleteContact }}
    >
      {children}
    </ContactContext.Provider>
  );
};
