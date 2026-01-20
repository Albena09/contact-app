// To show contact details

import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContactContext } from "../context/ContactContext";

const ContactShow = () => {
  const { id } = useParams();
  const { contacts } = useContext(ContactContext);
  const navigate = useNavigate();

  const contact = contacts.find((contacts) => String(contacts.id) === String(id));
  // const contact = contacts.find((contacts) => contacts.id === parseInt(id));

  console.log("Contacts:", contacts);
  console.log("Selected Contact ID:", id);
  console.log(contacts[0]);
  console.log("Contact to Show:", contact);
 

  //until contacts are loaded
  if (!contacts || contacts.length === 0)
    return <p className="text-center mt-4">Contact not found.</p>;

  if (!contact) {
    return <p className="text-center mt-4">Contact not found.</p>;
  }

  return (
    <div className="container py-4">
      <h3>Contact Details</h3>
      <div className="card p-3">
        <p>
          <strong>First Name:</strong> {contact.first_name}
        </p>
        <p>
          <strong>Last Name:</strong> {contact.last_name}
        </p>
        <p>
          <strong>Email:</strong> {contact.email}
        </p>
        <p>
          <strong>Phone:</strong> {contact.phone}
        </p>

        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default ContactShow;
