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
      sx={{ paddingTop: { xs: 0, sm: "70px" }, width: "100%", height: "100%" }}
    >
      <Typography fontWeight={600} textAlign={"center"}>
        Select a section
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", sm: "column" },
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          flexWrap: "wrap",
        }}
      >
        <Button
          variant="primary"
          disabled={selectedButton === "Browbone"}
          onClick={() => handleButtonClick("Browbone")}
          sx={{
            ...buttonStyle,
            width: { xs: "fit-content", sm: "100%" },
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
          }}
        >
          Inner Corner
        </Button>
      </Box>
    </Box>
  );
};

export default SectionSelect;
