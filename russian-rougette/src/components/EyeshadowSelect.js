import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./EyeshadowSelect.css";

function EyeshadowSelect() {
    const [eyeshadows, setEyeshadows] = useState([]);
    const [selectedEyeshadow, setSelectedEyeshadow] = useState('');
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
  
    // Fetch existing eyeshadows from the server
    useEffect(() => {
      fetch('/eyeshadows')
        .then(response => response.json())
        .then(data => setEyeshadows(data))
        .catch(error => console.error(error));
    }, []);
  
      // Handle form submission
  const handleSubmit = event => {
    event.preventDefault();

    // Create a new eyeshadow object
    const newEyeshadow = {
      name,
      brand
    };

    // If an existing eyeshadow is selected, use its ID in the request
    if (selectedEyeshadow) {
      newEyeshadow.id = selectedEyeshadow;
    }

    // Send the eyeshadow data to the server
    fetch('/eyeshadows', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEyeshadow)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Handle the response data as needed
        // Reset the form fields
        setSelectedEyeshadow('');
        setName('');
        setBrand('');
      })
      .catch(error => console.error(error));
  };

  return (
    <section class="eyeshadow-select-box">
      <h2>Add Eyeshadow to Collection</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Select Existing Eyeshadow:
          <select value={selectedEyeshadow} onChange={event => setSelectedEyeshadow(event.target.value)}>
            <option value="">-- Select Eyeshadow --</option>
            {eyeshadows.map(eyeshadow => (
              <option key={eyeshadow.id} value={eyeshadow.id}>{eyeshadow.name}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Name:
          <input type="text" value={name} onChange={event => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Brand:
          <input type="text" value={brand} onChange={event => setBrand(event.target.value)} />
        </label>
        <br />
        <button type="submit">Add Eyeshadow</button>
      </form>
    </section>
  );
};


export default EyeshadowSelect;
