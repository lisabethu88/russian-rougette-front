import { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import "./SectionSelect.css";


const SectionSelect = ({selectedSection}) => {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
        selectedSection(buttonName)
    };

    return(
        <section class="select-section">
            <label class="section-label header">
            <h2>Select a Section</h2>
            </label>
            <section class="button-container box-container">
                <Button 
                    variant="primary"
                    disabled={selectedButton === 'Browbone'}
                    onClick={() => handleButtonClick('Browbone')}
                >
                    Browbone
                </Button>

                <Button
                    variant="primary"
                    disabled={selectedButton === 'Above Crease'}
                    onClick={() => handleButtonClick('Above Crease')}
                >
                    Above Crease
                </Button>

                <Button
                    variant="primary"
                    disabled={selectedButton === 'Crease'}
                    onClick={() => handleButtonClick('Crease')}
                >
                    Crease
                </Button>

                <Button
                    variant="primary"
                    disabled={selectedButton === 'Deep Crease'}
                    onClick={() => handleButtonClick('Deep Crease')}
                >
                    Deep Crease
                </Button>

                <Button
                    variant="primary"
                    disabled={selectedButton === 'Outer Lid'}
                    onClick={() => handleButtonClick('Outer Lid')}
                >
                    Outer Lid
                </Button>

                <Button
                    variant="primary"
                    disabled={selectedButton === 'Middle Lid'}
                    onClick={() => handleButtonClick('Middle Lid')}
                >
                    Middle Lid
                </Button>

                <Button
                    variant="primary"
                    disabled={selectedButton === 'Inner Lid'}
                    onClick={() => handleButtonClick('Inner Lid')}
                >
                    Inner Lid
                </Button>

                <Button
                    variant="primary"
                    disabled={selectedButton === 'Inner Corner'}
                    onClick={() => handleButtonClick('Inner Corner')}
                >
                    Inner Corner
                </Button>
            </section>
        </section>
    )

}

export default SectionSelect;