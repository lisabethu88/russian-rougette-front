import "../App.css";
import "./FreePlay.css";
import "./Home.css";
import TheLook from "../components/TheLook";
import EyeshadowSelect from "../components/EyeshadowSelect"; 
import EyeVisual from "../components/EyeVisual";
import PaletteSelect from "../components/PaletteSelect";
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import SectionSelect from "../components/SectionSelect";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

const FreePlay=()=>{
    // modal
    const [linkTo, setLinkTo] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
      setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
        setLinkTo(null);
      };

      const handleContinueWithoutSaving = () => {
        setLinkTo('/');
      };
      // section shades
      const [browbone_shade, setBrowboneShade] = useState({color: 'rgba(0, 0, 0, 0)'}); 
      const [above_crease_shade,  setAboveCreaseShade] = useState({color: 'rgba(0, 0, 0, 0)'});
      const [crease_shade,  setCreaseShade] = useState({color: 'rgba(0, 0, 0, 0)'});
      const [deep_crease_shade,  setDeepCreaseShade] = useState({color: 'rgba(0, 0, 0, 0)'});
      const [outer_lid_shade,  setOuterLidShade] = useState({color: 'rgba(0, 0, 0, 0)'});
      const [middle_lid_shade,  setMiddleLidShade] = useState({color: 'rgba(0, 0, 0, 0)'});
      const [inner_lid_shade,  setInnerLidShade] = useState({color: 'rgba(0, 0, 0, 0)'});
      const [inner_corner_shade,  setInnerCornerShade] = useState({color: 'rgba(0, 0, 0, 0)'});


     // Section choice
      const [selectedSection, setSelectedSection] = useState(null);
      const handleSelectedSection = (selection) => {
        setSelectedSection(selection);
        setSelectedEyeshadow({color: 'rgba(0, 0, 0, 0)'});
      };
    
      // Eyeshadow choice
      const [selectedEyeshadow, setSelectedEyeshadow] = useState({});
      const handleSelectedEyeshadow = (newEyeshadow) => {
        newEyeshadow['palette_name'] = selectedPalette.name;
        setSelectedEyeshadow(newEyeshadow);
      }
      
      // Palette Choice
      const [selectedPalette, setSelectedPalette] = useState(null);
      const handleSelectedPalette = (newPalette) => {
        setSelectedPalette(newPalette);
      }



      const toggleComponents = () => {
        if (selectedPalette !== null){
          return (
            <EyeshadowSelect 
            setPalette={handleSelectedPalette}
            palette={selectedPalette}
            selectedEyeshadow={handleSelectedEyeshadow}
            selectedSection={selectedSection}
            browboneColor={browbone_shade.color}
            aboveCreaseColor={above_crease_shade.color}
            creaseColor={crease_shade.color}
            deepCreaseColor={deep_crease_shade.color}
            outerLidColor={outer_lid_shade.color}
            middleLidColor={middle_lid_shade.color}
            innerLidColor={inner_lid_shade.color}
            innerCornerColor={inner_corner_shade.color}
          />
          )
        }
        else{
          return(
          <PaletteSelect selectedPalette={handleSelectedPalette}/>
          );
        }
      }
    
      useEffect (() => {
        if (selectedEyeshadow.color !== 'rgba(0, 0, 0, 0)') {
        if (selectedSection === "Browbone") {
            setBrowboneShade(selectedEyeshadow);
        }
        else if (selectedSection === "Above Crease") {
            setAboveCreaseShade(selectedEyeshadow);
        }
        else if (selectedSection === "Crease" ) {
            setCreaseShade(selectedEyeshadow);
        }
        else if (selectedSection === "Deep Crease") {
            setDeepCreaseShade(selectedEyeshadow);
        }
        else if (selectedSection === "Outer Lid") {
            setOuterLidShade(selectedEyeshadow);
        }
        else if (selectedSection === "Middle Lid") {
            setMiddleLidShade(selectedEyeshadow);
        }
        else if (selectedSection === "Inner Lid") {
            setInnerLidShade(selectedEyeshadow);
        }
        else if (selectedSection === "Inner Corner") {
            setInnerCornerShade(selectedEyeshadow);
        }
      }
    
    },[selectedEyeshadow]);


    return(
        <main className="home-free-play-container">
            <section class="link-section">
            {/*Go back button*/}
            <Link  to={linkTo}>
            <Button onClick={handleShowModal} variant="primary back-home">
                Return Home
            </Button>
            </Link>

            <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
            <Modal.Title>Warning</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p>Your information will not be saved. Are you sure you want to continue?</p>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
                Cancel
            </Button>
            <Link to='/'>
            <Button variant="danger" onClick={handleContinueWithoutSaving}>
                Continue Without Saving
            </Button>
            </Link>
            </Modal.Footer>
            </Modal>
        </section>

        <section class="instructions">
            <p><b>Instructions:</b> First, select an eye section and eyeshadow palette. 
                Then, select the eyeshadow you want to apply to the selected section. 
                Adjust skin, eyebrow, and eyelash color to your preference. </p>
        </section>

        <section className="free-play-container">
            <SectionSelect selectedSection={handleSelectedSection}/>
        
            {toggleComponents()}
        
            <EyeVisual 
                selectedSection={selectedSection}
                browboneEyeshadow={browbone_shade}
                aboveCreaseEyeshadow={above_crease_shade}
                creaseEyeshadow={crease_shade}
                deepCreaseEyeshadow={deep_crease_shade}
                outerLidEyeshadow={outer_lid_shade}
                middleLidEyeshadow={middle_lid_shade}
                innerLidEyeshadow={inner_lid_shade}
                innerCornerEyeshadow={inner_corner_shade}
            />
        
            <TheLook
                browboneShade={browbone_shade}
                aboveCreaseShade={above_crease_shade}
                creaseShade={crease_shade}
                deepCreaseShade={deep_crease_shade}
                outerLidShade={outer_lid_shade}
                middleLidShade={middle_lid_shade}
                innerLidShade={inner_lid_shade}
                innerCornerShade={inner_corner_shade}
            />
        </section>
        

        </main>
    )
}

export default FreePlay;