import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
  });

  const [errorFields, setErrorFields] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = {};
    if (formData.firstName.length < 3) {
      error.firstName = "First name should be more then 3 char";
    }
    if (formData.email.includes("@") === false) {
      error.email = "invalid email";
    }
    if (Object.keys(error).length) {
      setErrorFields(error);
      return;
    }
    setFormData({
      firstName: "",
      email: "",
    });
    setErrorFields({});
  };

  return (
    <>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        {errorFields.firstName && <p>{errorFields.firstName}</p>}
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        {errorFields.email && <p>{errorFields.email}</p>}
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
