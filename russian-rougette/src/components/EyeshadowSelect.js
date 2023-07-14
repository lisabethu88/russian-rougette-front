import { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import { FaCircle } from "react-icons/fa";
import "./EyeshadowSelect.css";
import axios from 'axios';
const kBaseUrl = 'http://localhost:5000'

function EyeshadowSelect({  
  setPalette,
  palette,
  selectedEyeshadow, 
  selectedSection,
  browboneColor,
  aboveCreaseColor,
  creaseColor,
  deepCreaseColor,
  outerLidColor,
  middleLidColor,
  innerLidColor,
  innerCornerColor}) {

    const [formData, setFormData] = useState([]);

  // get all eyeshadows from db
    useEffect(() => {
      axios
        .get(`${kBaseUrl}/eyeshadows/${palette.id}`)
        .then((response) => {
          setFormData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [palette]);
    

  const handleButtonClick = (eyeshadow) => {
      selectedEyeshadow(eyeshadow);
  };

  const handleGoBackButtonClick = () => {
    setPalette(null);
  }

  const getColor = () => {
    let color="";
    if (selectedSection === "Browbone") {
      color = browboneColor;
    }
    else if (selectedSection === "Above Crease") {
      color = aboveCreaseColor;
    }
    else if (selectedSection === "Crease") {
      color = creaseColor;
    }
    else if (selectedSection === "Deep Crease") {
      color = deepCreaseColor;
    }
    else if (selectedSection === "Outer Lid") {
      color = outerLidColor;
    }
    else if (selectedSection === "Middle Lid") {
      color = middleLidColor;
    }
    else if (selectedSection === "Inner Lid") {
      color = innerLidColor;
    }
    else if (selectedSection === "Inner Corner") {
      color = innerCornerColor;
    }
    return color;
  };

  const getButton = (eyeshadow) => {
    if (selectedSection) {
      return (<Button disabled={eyeshadow.color === color} 
      onClick={() => handleButtonClick(eyeshadow)}>Apply</Button>);
    }
  }
  const color = getColor();
  
  return (
    <section>
      <label class="palette-label header">
      <h2>{palette.name}</h2>
      </label>
    <section class="eyeshadow-select-box box-container">
      <table>
      <thead>
        <tr>
        <th class="btn-col"><Button class="go-back-btn" onClick={()=>{handleGoBackButtonClick()}}>Go Back</Button></th>
          <th class="name-td">Shade</th>
          <th class="color-td">Color</th>
          <th class="finish-td">Finish</th>
          <th class="form-td">Form</th> 
        </tr><hr/>
      </thead>

      <tbody>
        {formData.map((eyeshadow) => (
          <tr>

            <td class="btn-col">{getButton(eyeshadow)}</td>
            <td class="name-td">{eyeshadow.name}</td>
            <td class="color-td"><FaCircle color={eyeshadow.color} class="icon"/></td>
            <td class="finish-td">{eyeshadow.finish}</td>
            <td class="form-td">{eyeshadow.form}</td>
            
          </tr>
        ))}
      </tbody>
      </table>
      </section>
      </section>

  );
};


export default EyeshadowSelect;
