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
import hand from "../images/hand-gif-3.gif"


const kBaseUrl = 'http://localhost:5000';

const RandomPlay =()=>{

    //------------------CONSTANTS---------------------
    const defaultSegmentColor = '#e33d75';

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
    const [segColors, setSegColors] = useState([...Array(8)].map(() => defaultSegmentColor));

    // Palette Choice
    const [selectedPalette, setSelectedPalette] = useState({});
    const handleSelectedPalette = (newPalette) => {
        setSegColors([...Array(8)].map(() => defaultSegmentColor));
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

    const selectRandomColors = (colors, count, state) => {
        let counter = 0;
        const result={}
        if (colors.length <= count) {
            return colors;
        }
        if (state === 0){
            return [...Array(8)].map(() => defaultSegmentColor);
        
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
            }}

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
                    onFinished={() => onFinished()}
                    primaryColor='black'
                    contrastColor='white'
                    buttonText='Spin'
                    isOnlyOnce={false}
                    size={230}
                    upDuration={50}
                    downDuration={100}
                    fontFamily='Urbanist'
            />
            )
        }
        else{
            return(
                <section class="select-roulette">
                    <text>Select a palette to get started!</text>   
                    <br/>   
                    <img id="hand-gif" src={hand} alt="left arrow" />
                </section>

            )
        }
    }

    const onFinished = () => {
        setSegColors(selectRandomColors(eyeshadows, 8, 1));         
    }

    return(
        <main class="home-roulette-container">
            <section>
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
            </section>
            <section class="roulette-container">
                {/*Roulette Components*/}
                <PaletteSelect selectedPalette={handleSelectedPalette}/>
                {toggleComponents()}     
                <EyeVisualRoulette eyeshadows={segmentsAndEyeshadows}/>              
                <TheLookRoulette eyeshadows={segmentsAndEyeshadows}/>  
            </section>
        </main>
    )
}

export default RandomPlay;