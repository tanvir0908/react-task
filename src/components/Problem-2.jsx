// import React from 'react';

import axios from "axios";
import { useState } from "react";

const Problem2 = () => {
  const [allContact, setAllContact] = useState([]);
  const [usContact, setUSContact] = useState([]);

  const [show, setShow] = useState("");

  axios
    .get("https://contact.mediusware.com/api/contacts/?format=json")
    .then((data) => setAllContact(data.data.results));

  axios
    .get(
      "https://contact.mediusware.com/api/country-contacts/United%20States/?format=json"
    )
    .then((data) => setUSContact(data.data.results));

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={() => setShow("all")}
            className="btn btn-lg btn-outline-primary"
            type="button"
          >
            All Contacts
          </button>
          <button
            onClick={() => setShow("us")}
            className="btn btn-lg btn-outline-warning"
            type="button"
          >
            US Contacts
          </button>
          <button
            onClick={() => setShow("")}
            className="btn btn-lg btn-outline-danger"
            type="button"
          >
            Clear
          </button>
        </div>

        <div className="mt-5">
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Country Id</th>
                  <th scope="col">Country Name</th>
                </tr>
              </thead>
              <tbody>
                {show === "all" &&
                  allContact.map((contact) => (
                    <tr key={contact.id}>
                      <td scope="col">{contact.id}</td>
                      <td scope="col">{contact.country.id}</td>
                      <td scope="col">{contact.country.name}</td>
                    </tr>
                  ))}
                {show === "us" &&
                  usContact.map((contact) => (
                    <tr key={contact.id}>
                      <td scope="col">{contact.id}</td>
                      <td scope="col">{contact.country.id}</td>
                      <td scope="col">{contact.country.name}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
