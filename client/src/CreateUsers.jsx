import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import "./styles/CreateUser.css";
import { useNavigate } from "react-router-dom";


function CreateUsers() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/createUsers", {name,email,age}).then((response)=>{
        //  console.log(response.data);
         navigate("/");
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h2 className="heading">Add Users</h2>

      <form
        className="form"
        action="/users"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          // value={formData.name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          // value={formData.email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          // value={formData.age}
          onChange={(e) => setAge(Number(e.target.value))}
          required
        />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
export default CreateUsers;
