import { useState, useEffect } from "react";
import "./SectionSelect.css";
import { Box, Button } from "@mui/material";
import { buttonStyle } from "../Constants";

const SectionSelect = ({ handleSelectedSection, selectedSection }) => {
  const [selectedButton, setSelectedButton] = useState(selectedSection);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    handleSelectedSection(buttonName);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
        paddingTop: "70px",
      }}
    >
      <Button
        variant="primary"
        disabled={selectedButton === "Browbone"}
        onClick={() => handleButtonClick("Browbone")}
        sx={buttonStyle}
      >
        Browbone
      </Button>

      <Button
        variant="primary"
        disabled={selectedButton === "Above Crease"}
        onClick={() => handleButtonClick("Above Crease")}
        sx={buttonStyle}
      >
        Above Crease
      </Button>

      <Button
        variant="primary"
        disabled={selectedButton === "Crease"}
        onClick={() => handleButtonClick("Crease")}
        sx={buttonStyle}
      >
        Crease
      </Button>

      <Button
        variant="primary"
        disabled={selectedButton === "Deep Crease"}
        onClick={() => handleButtonClick("Deep Crease")}
        sx={buttonStyle}
      >
        Deep Crease
      </Button>

      <Button
        variant="primary"
        disabled={selectedButton === "Outer Lid"}
        onClick={() => handleButtonClick("Outer Lid")}
        sx={buttonStyle}
      >
        Outer Lid
      </Button>

      <Button
        variant="primary"
        disabled={selectedButton === "Middle Lid"}
        onClick={() => handleButtonClick("Middle Lid")}
        sx={buttonStyle}
      >
        Middle Lid
      </Button>

      <Button
        variant="primary"
        disabled={selectedButton === "Inner Lid"}
        onClick={() => handleButtonClick("Inner Lid")}
        sx={buttonStyle}
      >
        Inner Lid
      </Button>

      <Button
        variant="primary"
        disabled={selectedButton === "Inner Corner"}
        onClick={() => handleButtonClick("Inner Corner")}
        sx={buttonStyle}
      >
        Inner Corner
      </Button>
    </Box>
  );
};

export default SectionSelect;
