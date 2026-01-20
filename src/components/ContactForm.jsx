import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ContactForm = ({ contactToEdit, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  //======== Fetching data for editing===========
  useEffect(() => {
    if (contactToEdit) {
      console.log(contactToEdit);
      setFormData({
        id: contactToEdit.id || "",
        first_name: contactToEdit.first_name || "",
        last_name: contactToEdit.last_name || "",
        email: contactToEdit.email || "",
        phone: contactToEdit.phone || "",
      });
    } else {
      // ===============Reset data when not editing=============
      setFormData({
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
      });
    }
  }, [contactToEdit]);

  // ===========Functionality=================

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSubmit = {
      ...formData,
      id: formData.id || uuidv4(),
    };
    onSubmit(dataToSubmit);
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 ">
      <div
        className="mb-3 
      "
      >
        <label className="form-label">First Name</label>
        <input
          type="text"
          name="first_name"
          className="form-control"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Last Name</label>
        <input
          type="text"
          name="last_name"
          className="form-control"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input
          type="text"
          name="phone"
          className="form-control"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary me-2 mb-2">
        {contactToEdit ? "Update" : "Save"}
      </button>
      {onCancel && (
      <button type="button" className="btn btn-secondary" onClick={onCancel}>
        Cancel
      </button>
      )}
    </form>
  );
};

export default ContactForm;
