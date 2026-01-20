import React from "react";
import { FaFilter } from "react-icons/fa";

const ContactFilter = ({ value, onChange }) => {
  return (
    <div className="d-flex gap-3 align-items-center justify-content-between p-3 fs-2">
      <div className="d-flex align-items-center gap-2">
        <FaFilter className="text-success" />
        <span>Filter</span>
      </div>

      <select
        className="form-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="firstName">First Name (A → Z)</option>
        <option value="lastName">Last Name (A → Z)</option>
        <option value="oldest">Oldest To First</option>
      </select>
    </div>
  );
};

export default ContactFilter;
