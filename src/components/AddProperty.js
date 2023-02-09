import React, { useState } from "react";
import "../styles/add-property.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
    },
  };
  /* eslint-disable */
  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    /* eslint-disable */
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  }

  return (
    <div className="add-property">
      <h1>Add Properties</h1>
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Title
            <input
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
            />
        </label>
        <button className="button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
