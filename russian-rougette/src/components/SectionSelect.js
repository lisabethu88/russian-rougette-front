import { useState, useEffect } from "react";
import "./SectionSelect.css";
import { Box, Button, Typography } from "@mui/material";
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
        display: { xs: "block", sm: "flex" },
        margin: { xs: 1, sm: 0 },
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
        paddingTop: "70px",
      }}
    >
      <Typography fontWeight={600} textAlign={"center"}>
        Select a section
      </Typography>
      <Button
        variant="primary"
        disabled={selectedButton === "Browbone"}
        onClick={() => handleButtonClick("Browbone")}
        sx={{
          ...buttonStyle,
          width: { xs: "fit-content", sm: "100%" },
          margin: { xs: 1, sm: 0 },
        }}
      >
        Browbone
      </Button>

      <Button
        variant="primary"
        disabled={selectedButton === "Above Crease"}
        onClick={() => handleButtonClick("Above Crease")}
        sx={{
          ...buttonStyle,
          width: { xs: "fit-content", sm: "100%" },
          margin: { xs: 1, sm: 0 },
        }}
      >
        Above Crease
      </Button>

      <Button
        variant="primary"
        disabled={selectedButton === "Crease"}
        onClick={() => handleButtonClick("Crease")}
        sx={{
          ...buttonStyle,
          width: { xs: "fit-content", sm: "100%" },
          margin: { xs: 1, sm: 0 },
        }}
      >
        Crease
      </Button>

      <Button
        variant="primary"
        disabled={selectedButton === "Deep Crease"}
        onClick={() => handleButtonClick("Deep Crease")}
        sx={{
          ...buttonStyle,
          width: { xs: "fit-content", sm: "100%" },
          margin: { xs: 1, sm: 0 },
        }}
      >
        Deep Crease
      </Button>

      <Button
        variant="primary"
        disabled={selectedButton === "Outer Lid"}
        onClick={() => handleButtonClick("Outer Lid")}
        sx={{
          ...buttonStyle,
          width: { xs: "fit-content", sm: "100%" },
        }}
      >
        Outer Lid
      </Button>

      <Button
        variant="primary"
        disabled={selectedButton === "Middle Lid"}
        onClick={() => handleButtonClick("Middle Lid")}
        sx={{
          ...buttonStyle,
          width: { xs: "fit-content", sm: "100%" },
          margin: { xs: 1, sm: 0 },
        }}
      >
        Middle Lid
      </Button>

      <Button
        variant="primary"
        disabled={selectedButton === "Inner Lid"}
        onClick={() => handleButtonClick("Inner Lid")}
        sx={{
          ...buttonStyle,
          width: { xs: "fit-content", sm: "100%" },
          margin: { xs: 1, sm: 0 },
        }}
      >
        Inner Lid
      </Button>

      <Button
        variant="primary"
        disabled={selectedButton === "Inner Corner"}
        onClick={() => handleButtonClick("Inner Corner")}
        sx={{
          ...buttonStyle,
          width: { xs: "fit-content", sm: "100%" },
          margin: { xs: 1, sm: 0 },
        }}
      >
        Inner Corner
      </Button>
    </Box>
  );
};

export default SectionSelect;
