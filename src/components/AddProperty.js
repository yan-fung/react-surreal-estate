import React, { useState } from "react";
import "../styles/add-property.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "",
      bedrooms: "",
      bathrooms: "",
      price: "",
      email: "",
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
      <div className="form-container">
        <form className="form-container-2" onSubmit={handleAddProperty}>
          
          <div className="label-container">
            <label className="label-header" htmlFor="title">Title</label>
                <input
                  id="title"
                  name="title"
                  value={fields.title}
                  placeholder="two bed flat"
                  onChange={handleFieldChange}
                />
          </div>
          <div className="label-container">
            <label className="label-header" htmlFor="city">City</label>
              <select id="city" name="city" value={fields.city} onChange={handleFieldChange}>
                <option value="Manchester">Manchester</option>
                <option value="Leeds">Leeds</option>
                <option value="Sheffield">Sheffield</option>
                <option value="Liverpool">Liverpool</option>
                </select>
          </div>
          <div className="label-container">
            <label className="label-header" htmlFor="type">Property type</label>
              <select id="type" name="type" value={fields.type} onChange={handleFieldChange}>
                <option value="Detached">Detached</option>
                <option value="Semi-Detached">Semi-Detached</option>
                <option value="Terraced">Terraced</option>
                <option value="End of Terrace">End of Terrace</option>
                <option value="Cottage">Cottage</option>
                <option value="Bungalow">Bungalow</option>
                </select>
          </div>
          <div className="label-container">
          <label className="label-header" htmlFor="bedrooms">No. of bedrooms</label>
              <select id="bedrooms" name="bedrooms" value={fields.bedrooms} onChange={handleFieldChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value=">5">{`>`} 5</option>
                </select>
          </div>
          <div className="label-container">
            <label className="label-header" htmlFor="bathrooms">No. of bathrooms</label>
              <select id="bathrooms" name="bathrooms" value={fields.bathrooms} onChange={handleFieldChange}>
                <option value="1">1</option>
                <option value="2-Detached">2</option>
                <option value=">3">{`>`} 3</option>
                </select>
          </div>
          <div className="label-container">
            <label className="label-header" htmlFor="price">Price (£)</label>
                <input
                  id="price"
                  name="price"
                  value={fields.price}
                  placeholder="1000"
                  onChange={handleFieldChange}
                />
          </div>
          <div className="label-container">
            <label className="label-header" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  value={fields.email}
                  placeholder="suet0913@hotmail.com"
                  onChange={handleFieldChange}
                />
          </div>
          <button className="submit-button" type="submit">
            Add property
          </button>
        </form>
      </div>

    </div>
  );
};

export default AddProperty;
