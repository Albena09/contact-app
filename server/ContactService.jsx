import React from "react";
import axios from "axios";

export class ContactService {
  static serverURL = "http://localhost:9000";
  static getAllContacts() {
    let dataURL = `${this.serverURL}/contacts`;
    axios.get(dataURL);
  }
}
