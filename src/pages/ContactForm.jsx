// add/edit page

import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContactContext } from "../context/ContactContext";
import ContactForm from "../components/ContactForm";

const ContactForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { contacts, addContact, updateContact } = useContext(ContactContext);

  const contactToEdit = contacts.find((contact) => contact.id === parseInt(id));

  const handleSubmit = (contact) => {
    if (contactToEdit) {
      updateContact(contact);
    } else {
      const newContact = {
        first_name: contact.first_name,
        last_name: contact.last_name,
        email: contact.email,
        phone: contact.phone,
      };
      addContact(newContact);
    }
    navigate("/");
  };

  return (
    <div className="container py-4">
      <h3>{contactToEdit ? "Edit Contact" : "Add Contact"}</h3>
      <ContactForm
        contactToEdit={contactToEdit}
        onSubmit={handleSubmit}
        onCancel={() => navigate("/")}
      />
    </div>
  );
};

export default ContactForm;
