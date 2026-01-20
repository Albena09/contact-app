// ===========for Table/list of contacts component ==============

import { FaEdit, FaEye } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const ContactList = ({ contacts, onDelete }) => {
  const navigate = useNavigate();
  if (contacts.length === 0)
    return (
      <p className="mt-4 d-flex justify-content-center align-content-center">
        No contacts found.
      </p>
    );

  return (
    <>
      <table className="table table-striped table-hover mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contacts, index) => (
            <tr key={contacts.id}>
              <td>{index + 1}</td>
              <td>{contacts.first_name}</td>
              <td>{contacts.last_name}</td>
              <td>{contacts.email}</td>
              <td>{contacts.phone}</td>
              <td>
                <button
                  className="btn btn-sm btn-outline-info me-1"
                  onClick={() => navigate(`/show/${contacts.id}`)}
                >
                  <FaEye />
                </button>
                <button
                  className="btn btn-sm btn-outline-secondary me-1"
                  onClick={() => navigate(`/edit/${contacts.id}`)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => onDelete(contacts)} // triggers modal
                >
                  <RiDeleteBin6Line />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ContactList;
