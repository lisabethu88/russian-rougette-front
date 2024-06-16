import "./Home.css";
import "../App.css";
import "./RandomPlay.css";
import TheLookRoulette from "../components/TheLookRoulette";
import EyeVisualRoulette from "../components/EyeVisualRoulette";
import PaletteSelect from "../components/PaletteSelect";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "react-wheel-of-prizes/dist/index.js";
import { Link } from "react-router-dom";
import WheelComponent from "../components/Wheel";
import "react-wheel-of-prizes/dist/index.js";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import hand from "../images/download (2).gif";
import { kBaseUrl } from "../Constants";
import Box from "@mui/material/Box";
import Instructions from "../components/Instructions";
import EyeSectionContainer from "../components/EyeSectionContainer";
import EyeSectionContainerRoulette from "../components/EyeSectionContainerRoulette";
import { Typography } from "@mui/material";

const RandomPlay = () => {
  //------------------CONSTANTS---------------------
  const instructionsText =
    "First, select an eyeshadow palette. Then, spin the wheel to create a randomized eyeshadow look. Adjust skin, eyebrow, and eyelash color to your preference.";

  const defaultSegmentColor = "#df8487";

  const segments = [
    "Browbone",
    "Above Crease",
    "Crease",
    "Deep Crease",
    "Outer Lid",
    "Inner Lid",
    "Middle Lid",
    "Inner Corner",
  ];

  // -----------------HANDLE STATE------------------

  // Eyeshadows from selected palette
  const [eyeshadows, setEyeshadows] = useState([]);

  // Segment Colors
  const [segColors, setSegColors] = useState(
    [...Array(8)].map(() => defaultSegmentColor)
  );

  // Palette Choice
  const [selectedPalette, setSelectedPalette] = useState({});
  const handleSelectedPalette = (newPalette) => {
    setSegColors([...Array(8)].map(() => defaultSegmentColor));
    setSelectedPalette(newPalette);
  };

  const [segmentsAndEyeshadows, setSegmentsAndEyeshadows] = useState({
    Browbone: { finish: null, color: "rgba(0, 0, 0, 0)" },
    "Above Crease": { finish: null, color: "rgba(0, 0, 0, 0)" },
    Crease: { finish: null, color: "rgba(0, 0, 0, 0)" },
    "Deep Crease": { finish: null, color: "rgba(0, 0, 0, 0)" },
    "Inner Lid": { finish: null, color: "rgba(0, 0, 0, 0)" },
    "Middle Lid": { finish: null, color: "rgba(0, 0, 0, 0)" },
    "Outer Lid": { finish: null, color: "rgba(0, 0, 0, 0)" },
    "Inner Corner": { finish: null, color: "rgba(0, 0, 0, 0)" },
  });

  // -----------------HOOKS------------------

  // get all eyeshadows from db
  useEffect(() => {
    if (Object.keys(selectedPalette).length !== 0) {
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
  }, [eyeshadows]);

  /*-------------FUNCTIONS------------------*/

  const selectRandomColors = (colors, count, state) => {
    let counter = 0;
    const result = {};
    if (colors.length <= count) {
      return colors;
    }
    if (state === 0) {
      return [...Array(8)].map(() => defaultSegmentColor);
    }

    const selectedColors = [];
    const availableIndices = new Set();

    while (availableIndices.size < count) {
      const randomIndex = Math.floor(Math.random() * colors.length);
      if (!availableIndices.has(randomIndex)) {
        availableIndices.add(randomIndex);
        result[segments[counter]] = colors[randomIndex];
        selectedColors.push(colors[randomIndex].color);
        counter++;
      }
    }

    if (state === 1) {
      setSegmentsAndEyeshadows(result);
    }
    return selectedColors;
  };

  const toggleComponents = () => {
    if (Object.keys(selectedPalette).length !== 0) {
      return (
        <WheelComponent
          segments={segments}
          segColors={segColors}
          winningSegment="won 10"
          onFinished={() => onFinished()}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={230}
          upDuration={50}
          downDuration={100}
        />
      );
    } else {
      return null;
      // <Box
      //   sx={{
      //     width: "fit-content",
      //     display: "flex",
      //     flexDirection: "column",
      //     alignItems: "center",
      //     justifyContent: "center",
      //   }}
      // >
      //   <Typography>Select a palette to get started!</Typography>
      //   <img style={{ width: 150 }} src={hand} alt="pointing neon hand" />
      // </Box>
    }
  };

  const onFinished = () => {
    setSegColors(selectRandomColors(eyeshadows, 8, 1));
  };

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "fit-content",
        minHeight: "100%",
        paddingBottom: 5,
        overflow: "scroll",
        gap: 5,
      }}
    >
      <Instructions text={instructionsText} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {/*Roulette Components*/}
        {/* <PaletteSelect selectedPalette={handleSelectedPalette} /> */}

        <EyeVisualRoulette eyeshadows={segmentsAndEyeshadows} />
        <PaletteSelect selectedPalette={handleSelectedPalette} />
        {toggleComponents()}
        {/* <EyeVisualRoulette eyeshadows={segmentsAndEyeshadows} /> */}
        <TheLookRoulette
          eyeshadows={segmentsAndEyeshadows}
          selectedPalette={selectedPalette}
        />
      </Box>
    </Box>
  );
};

export default RandomPlay;
