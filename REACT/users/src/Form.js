import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";

export const UserForm = () => {
  const insertUser = async () => {
    const response = await axios.push("http://localhost:8080/");
  };
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [work, setWork] = useState("");

  return (
    <div class="form">
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name="firstName"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <TextField
        id="outlined-basic"
        label="LastName"
        variant="outlined"
        name="lastName"
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />
      <TextField
        id="outlined-basic"
        label="Age"
        variant="outlined"
        type="number"
        name="age"
        onChange={(event) => {
          setAge(parseInt(event.target.value));
        }}
      />
      <TextField
        id="outlined-basic"
        label="Work"
        variant="outlined"
        name="work"
        onChange={(event) => {
          setWork(event.target.value);
        }}
      />
      <button>Invia</button>
    </div>
  );
};
