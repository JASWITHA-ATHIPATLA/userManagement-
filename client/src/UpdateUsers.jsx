import React from "react";
import { useState, useEffect } from "react";
import "./styles/CreateUser.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateUsers() {
  const { id } = useParams();
  const [name, setName] = useState(""); // ✅ empty string
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate= useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/getUser/" + id)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put("http://localhost:3000/updateUser/" + id, { name, email, age })
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <h2 className="heading">Update User </h2>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}

export default UpdateUsers;
