import "../App.css";
import "./Home.css";
import "../App.css";
import "./RandomPlay.css";
import TheLookRoulette from "../components/TheLookRoulette";
import EyeVisualRoulette from "../components/EyeVisualRoulette";
import PaletteSelect from "../components/PaletteSelect";
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'react-wheel-of-prizes/dist/index.js';
import { Link } from "react-router-dom";
import WheelComponent from '../components/Wheel';
import 'react-wheel-of-prizes/dist/index.js';
import axios from 'axios';
import leftarrow from '../images/left-arrow.webp';
import Modal from 'react-bootstrap/Modal';

const kBaseUrl = 'http://localhost:5000';

const RandomPlay =()=>{

    // -----------------HANDLE STATE------------------

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
    
    // Eyeshadows from selected palette
    const [eyeshadows, setEyeshadows] = useState([])

    // Segment Colors
    const [segColors, setSegColors] = useState([
        "#e33d75", "#e33d75", "#e33d75", "#e33d75", "#e33d75", "#e33d75", "#e33d75", "#e33d75"
    ]);

    // Palette Choice
    const [selectedPalette, setSelectedPalette] = useState({});
    const handleSelectedPalette = (newPalette) => {
        setSegColors([
            "#e33d75", "#e33d75", "#e33d75", "#e33d75", "#e33d75", "#e33d75", "#e33d75", "#e33d75"
        ]);
        setSelectedPalette(newPalette);
    }

    const [segmentsAndEyeshadows, setSegmentsAndEyeshadows] = useState({
        "Browbone": {finish:null, color: 'rgba(0, 0, 0, 0)'},
        "Above Crease": {finish:null, color: 'rgba(0, 0, 0, 0)'},
        "Crease": {finish:null, color: 'rgba(0, 0, 0, 0)'},
        "Deep Crease": {finish:null, color: 'rgba(0, 0, 0, 0)'},
        "Inner Lid": {finish:null, color: 'rgba(0, 0, 0, 0)'},
        "Middle Lid": {finish:null, color: 'rgba(0, 0, 0, 0)'},
        "Outer Lid": {finish:null, color: 'rgba(0, 0, 0, 0)'},
        "Inner Corner": {finish:null, color: 'rgba(0, 0, 0, 0)'}
    });

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

        useEffect(() => {
            setSegColors(selectRandomColors(eyeshadows, 8, 0));
            
        },[eyeshadows]); 

    /*-------------FUNCTIONS------------------*/
    // constants
    const segments = [
            "Browbone", 
            "Above Crease", 
            "Crease", 
            "Deep Crease", 
            "Outer Lid", 
            "Inner Lid", 
            "Middle Lid", 
            "Inner Corner"
        ]

    const selectRandomColors = (colors, count, state) => {
        let counter = 0;
        const result={}
        if (colors.length <= count) {
            return colors;
        }
        if (state === 0){
            return ["#e33d75", "#e33d75", "#e33d75", "#e33d75", "#e33d75", "#e33d75", "#e33d75", "#e33d75"];
        
        }
        
        const selectedColors = [];
        const availableIndices = new Set();

        while (availableIndices.size < count) {
          const randomIndex = Math.floor(Math.random() * colors.length);
            if (!availableIndices.has(randomIndex)) {
            availableIndices.add(randomIndex);
            result[segments[counter]]=colors[randomIndex];
            selectedColors.push(colors[randomIndex].color);
            counter++;
            }
        }

        if(state === 1)
        {
            setSegmentsAndEyeshadows(result);
        }
        return selectedColors;
    }
    

    const toggleComponents = ()=>{
        if (Object.keys(selectedPalette).length !== 0){
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
                    <text>Select a palette to get started!</text>     
                </section>

            )
        }
    }

    const onFinished = (winner) => {
        setSegColors(selectRandomColors(eyeshadows, 8, 1));         
    }

    


    return(
        <main>
        {/*Go back button*/}
        <Link to={linkTo}>
        <Button onClick={handleShowModal} variant="primary back-home">
            Back
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
            <PaletteSelect 
                selectedPalette={handleSelectedPalette}
            />
            {toggleComponents()}
            
        <EyeVisualRoulette
                eyeshadows={segmentsAndEyeshadows}
        />              
            <TheLookRoulette
                eyeshadows={segmentsAndEyeshadows}
            />  
        </section>
        </main>
    )
}

export default RandomPlay;