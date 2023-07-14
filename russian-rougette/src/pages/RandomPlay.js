import "../App.css";
import "./Home.css";
import "../App.css";
import "./RandomPlay.css";
import TheLook from "../components/TheLook";
import EyeVisual from "../components/EyeVisual";
import PaletteSelect from "../components/PaletteSelect";
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import SectionSelect from "../components/SectionSelect";
import 'react-wheel-of-prizes/dist/index.js';
import { Link } from "react-router-dom";
import WheelComponent from '../components/Wheel';
import 'react-wheel-of-prizes/dist/index.js';
import axios from 'axios';
import leftarrow from '../images/left-arrow.webp';
import rightarrow from '../images/right-arrow.webp';
import Modal from 'react-bootstrap/Modal';

const kBaseUrl = 'http://localhost:5000';

const RandomPlay =()=>{

    // -----------------HANDLE STATE------------------
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

      // Eyeshadow choice
    const [selectedEyeshadow, setSelectedEyeshadow] = useState({});

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

    // Eyeshadows that will be displayed on wheel
    const [eyeshadows, setEyeshadows] = useState([])
        
    // Segment Colors
    const [segColors, setSegColors] = useState([]);

    // segments
    const [segments, setSegments] = useState([])

    // Palette Choice
    const [selectedPalette, setSelectedPalette] = useState({});
    
    const handleSelectedPalette = (newPalette) => {
        setSelectedPalette(newPalette);
    }

    // -----------------HOOKS------------------


      // get all eyeshadows from db
    useEffect(() => {
        if (Object.keys(selectedPalette).length !== 0 ){
            axios
            .get(`${kBaseUrl}/eyeshadows/${selectedPalette.id}`)
            .then((response) => {
                setEyeshadows(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        }
        }, [selectedPalette]);

    useEffect(()=> {
        if (eyeshadows !== []){
        setSegments(eyeshadows.map((e) => e.name));
        setSegColors(eyeshadows.map((e) => e.color));
        }
    },[eyeshadows])

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

    /*-------------FUNCTIONS------------------*/

    const toggleComponents = ()=>{
        if (Object.keys(selectedPalette).length !== 0 
        && selectedSection !== null){
            return (
                <WheelComponent
                segments={segments}
                segColors={segColors}
                winningSegment='won 10'
                onFinished={(winner) => onFinished(winner)}
                primaryColor='black'
                contrastColor='white'
                buttonText='Spin'
                isOnlyOnce={false}
                size={200}
                upDuration={50}
                downDuration={100}
                fontFamily='Urbanist'
            />
            )
        }
        else{
            return(
                <section class="select-roulette">
                    <img id="left-arrow" class="arrow" src={leftarrow} alt="left arrow" />
                    <br/>
                    <text>Select a section and palette to get started!</text>     
                    <br/>         
                    <img id="right-arrow" class="arrow" src={rightarrow} alt="right arrow" />
                </section>

            )
        }
    }


    const onFinished = (winner) => {
        setSelectedEyeshadow(winner);
    }


    return(
        <main>
        {/*Go back button*/}
         <Link to={linkTo}>
        <Button onClick={handleShowModal} variant="primary back-home">
            Back to Home
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

        {/*Roulette Components*/}
        <section class="roulette-container">
            <SectionSelect
                selectedSection={handleSelectedSection}
            /> 
            {toggleComponents()}
            <PaletteSelect 
                selectedPalette={handleSelectedPalette}
            />

            
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
                browboneShade={browbone_shade.name}
                aboveCreaseShade={above_crease_shade.name}
                creaseShade={crease_shade.name}
                deepCreaseShade={deep_crease_shade.name}
                outerLidShade={outer_lid_shade.name}
                middleLidShade={middle_lid_shade.name}
                innerLidShade={inner_lid_shade.name}
                innerCornerShade={inner_corner_shade.name}
            /> 
        </section>
        </main>
    )
}

export default RandomPlay;