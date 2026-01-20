import React, { useContext } from "react";
import { ContactContext } from "../context/ContactContext";
import { Form } from "react-bootstrap";

const SearchBar = () => {
  const { search, setSearch } = useContext(ContactContext);
  return (
    <Form.Control
      placeholder="Search contacts..."
      className="mb-3"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
