import React from "react";
import SectionSelect from "./SectionSelect";
import EyeVisual from "./EyeVisual";
import { Box } from "@mui/material";

const EyeSectionContainer = ({
  handleSelectedSection,
  selectedSection,
  browboneEyeshadow,
  aboveCreaseEyeshadow,
  creaseEyeshadow,
  deepCreaseEyeshadow,
  outerLidEyeshadow,
  middleLidEyeshadow,
  innerLidEyeshadow,
  innerCornerEyeshadow,
}) => {
  return (
    <Box>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <SectionSelect
          handleSelectedSection={handleSelectedSection}
          selectedSection={selectedSection}
        />
        <EyeVisual
          selectedSection={selectedSection}
          browboneEyeshadow={browboneEyeshadow}
          aboveCreaseEyeshadow={aboveCreaseEyeshadow}
          creaseEyeshadow={creaseEyeshadow}
          deepCreaseEyeshadow={deepCreaseEyeshadow}
          outerLidEyeshadow={outerLidEyeshadow}
          middleLidEyeshadow={middleLidEyeshadow}
          innerLidEyeshadow={innerLidEyeshadow}
          innerCornerEyeshadow={innerCornerEyeshadow}
        />
      </Box>
    </Box>
  );
};
export default EyeSectionContainer;
