import React, { useContext, useState } from "react";
import { ContactContext } from "../context/ContactContext";
import ContactList from "../components/ContactList";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../components/DeleteModal";
import { FaFilter, FaPlusCircle } from "react-icons/fa";
import ContactFilter from "../components/ContactFilter";

const Homepage = () => {
  const { contacts, deleteContact } = useContext(ContactContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("default");
  const navigate = useNavigate();

  const handleDeleteClick = (contact) => {
    setSelectedContact(contact);
    setShowModal(true);
  };

  const handleConfirmDelete = (id) => {
    deleteContact(id);
    setShowModal(false);
    setSelectedContact(null);
  };

  const handleClearFilter = () => {
    setFilter("default");
  };

  const filteredContacts = contacts
    .filter(
      (c) =>
        c.first_name.toLowerCase().includes(search.toLowerCase()) ||
        c.last_name.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase()) ||
        c.phone.includes(search)
    )
    .sort((a, b) => {
      if (filter === "firstName") {
        return a.first_name.localeCompare(b.first_name);
      }
      if (filter === "lastName") {
        return a.last_name.localeCompare(b.last_name);
      }
      if (filter === "oldest") {
        return new Date(a.createdAt || 0) - new Date(b.createdAt || 0);
      }
      return 0;
    });

  return (
    <div className="container py-4">
      <div>
        <p className="fs-3">
          <strong>Contact</strong> APP
        </p>
      </div>

      {/* ============= search section============= */}
      <div className="d-flex justify-content-between align-items-center mb-3 ">
        <h2>All Contacts</h2>
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search contact"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-success">Search</button>
        <button className="btn btn-success" onClick={() => navigate("/add")}>
          <FaPlusCircle /> Add New
        </button>
      </div>
      {/*=================== filter section====================== */}
      <ContactFilter value={filter} onChange={setFilter} />

      {/*  =================== Contact List =============== */}
      <ContactList contacts={filteredContacts} onDelete={handleDeleteClick} />

      {/*  =================== Delete Modal =============== */}
      <DeleteModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onConfirm={handleConfirmDelete}
        contact={selectedContact}
      />
    </div>
  );
};

export default Homepage;
