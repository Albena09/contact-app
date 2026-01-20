import React from "react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContactContext } from "../context/ContactContext";
import ContactForm from "../components/ContactForm";

const EditContact = () => {
  const { id } = useParams();
  const { contacts, updateContact } = useContext(ContactContext);
  const navigate = useNavigate();

  const contactToEdit = contacts.find((contacts) => contacts.id === id);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (contacts.length > 0) {
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  }, [contacts]);

  const handleSubmit = async (contact) => {
    try {
      await updateContact(contact);
      navigate("/");
    } catch (err) {
      console.error("Error updating contact:", err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Contact not found.</div>;
  }

  return (
    <div className="container py-4">
      <h3>Edit/Update Contact</h3>
      <ContactForm
        contactToEdit={contactToEdit}
        onSubmit={handleSubmit}
        onCancel={() => navigate("/")}
      />
    </div>
  );
};

export default EditContact;
