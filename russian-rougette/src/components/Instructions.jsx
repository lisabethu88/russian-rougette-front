import React from "react";
import { Box } from "@mui/system";
import { bodyFont } from "../Constants";
import Typography from "@mui/material/Typography";

const Instructions = ({ text }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 500,
        padding: 2,
        fontFamily: bodyFont,
      }}
    >
      <Typography>
        <b>Instructions:</b> {text}
      </Typography>
    </Box>
  );
};

export default Instructions;
