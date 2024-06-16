import React from "react";
import { Box } from "@mui/material";
import PaletteSelect from "./PaletteSelect";
import EyeVisualRoulette from "./EyeVisualRoulette";

const EyeSectionContainerRoulette = ({ handleSelectedPalette, eyeshadows }) => {
  console.log("eyesectioncontinrroulette", eyeshadows);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <EyeVisualRoulette eyeshadows={eyeshadows} />
      <PaletteSelect selectedPalette={handleSelectedPalette} />
    </Box>
  );
};
export default EyeSectionContainerRoulette;
