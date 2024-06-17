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
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "center",
        flexWrap: { xs: "wrap", sm: "nowrap" },
      }}
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
  );
};
export default EyeSectionContainer;
