import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const [missing, setMissing] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = {
        name: firstName,
        email: email
      };
      setPeople((people) => {
        return [...people, person];
      });
      console.log(person);
      setFirstName("");
      setEmail("");
      setMissing(false);
    } else {
      setMissing(true);
    }
  };
  const removePerson = (person) => {
    let newPeople = people.filter((yo) => yo !== person);
    setPeople(newPeople);
  };
  return (
    <div className="App">
      {people.map((person) => {
        const { name, email } = person;
        return (
          <div id="person">
            <h3>{name}</h3>
            <h6>{email}</h6>
            <button
              onClick={() => {
                removePerson(person);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        );
      })}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Name: </label>
          <input
            className="form-control"
            id="firstName"
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="enter name"
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email: </label>
          <input
            className="form-control"
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="enter email"
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Add Person
        </button>
        <br />
        <br />
        {missing && <p>value(s) missing</p>}
      </form>
    </div>
  );
}
