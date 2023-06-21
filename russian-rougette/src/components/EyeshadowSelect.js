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
    const [finish, setFinish] = useState('');
    const [form, setForm] = useState('');
    const [color, setColor] = useState('#000000');


  
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
      brand,
      finish,
      form,
      color
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
        setFinish('');
        setForm('');
        setColor('');
      })
      .catch(error => console.error(error));
  };

  return (
    <section class="eyeshadow-select-box">
      <h2>My Collection</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Select an Eyeshadow from the List:
          <br/>
          <select value={selectedEyeshadow} onChange={event => setSelectedEyeshadow(event.target.value)}>
            <option value="">-- Select Eyeshadow --</option>
            {eyeshadows.map(eyeshadow => (
              <option key={eyeshadow.id} value={eyeshadow.id}>{eyeshadow.name}</option>
            ))}
          </select>
        </label>
        <br />
        <p>Add an Eyeshadow Manually</p>
        <label>
          Name: 
          <br />
          <input type="text" value={name} onChange={event => setName(event.target.value)} />
        </label>
        <br />
        
        <label>
          Brand: 
          <br />
          <input type="text" value={brand} onChange={event => setBrand(event.target.value)} />
        </label>
        <br />

        <label>
          Finish:
        <br />
          <select name="finish" id="finish" value={finish} onChange={event => setFinish(event.target.value)}>
          <option value="matte">Matte</option>
          <option value="metallic">Metallic</option>
          <option value="satin">Satin</option>
          <option value="glitter">Glitter</option>
          <option value="shimmer">Shimmer</option>

          </select>
        </label>
        <br />

        <label>
          Form:
        <br />
          <select name="form" id="form" value={form} onChange={event => setFinish(event.target.value)}>
          <option value="powder">Powder</option>
          <option value="cream">Cream</option>
          <option value="liquid">Liquid</option>
          </select>
        </label>
        <br />
        
        <label>
          Color:
        <br />
          <input type="color" value={color} onChange={event => setColor(event.target.value)} />
        </label>
        <br />

        <button type="submit">Add Eyeshadow</button>
      </form>
    </section>
  );
};


export default EyeshadowSelect;
