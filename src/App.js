import "./App.css";
import React, { useState } from "react";
import Form from "./Components/Form";

function App() {
  const [peoples, setPeoples] = useState([]);
  const [values, setValues] = useState({ name: "", email: "", role: "" });

  const onSubmit = () => {
    setPeoples([values, ...peoples]);
    setValues({ name: "", email: "", role: "" });
  };

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };
  return (
    <div className="App">
      <h1>Assemble Your Team!</h1>
      <Form values={values} change={onChange} submit={onSubmit} />
      {peoples.map((people, idx) => (
        <div key={idx}>
          {people.name}, {people.role}, {people.email}
        </div>
      ))}
    </div>
  );
}

export default App;
