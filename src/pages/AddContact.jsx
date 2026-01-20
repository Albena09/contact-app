import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContactContext } from "../context/ContactContext";
import ContactForm from "../components/ContactForm";

const AddContact = () => {
  const { addContact } = useContext(ContactContext);
  const navigate = useNavigate();

  const handleSubmit = async (contact) => {
    await addContact(contact);
    navigate("/");
  };
  return (
    <div className="container py-4">
      <h3>Add Contact</h3>
      <ContactForm onSubmit={handleSubmit} onCancel={() => navigate("/")} />
    </div>
  );
};

export default AddContact;
