import React from "react";
import { Box, Typography } from "@mui/material";
import { headerFont } from "../Constants";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box
      component="footer"
      sx={{
        padding: 2,
        backgroundColor: "#0a97b1",
        position: "relative",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography
        variant="body1"
        textAlign="center"
        fontWeight={700}
        color="white"
        fontFamily={headerFont}
        letterSpacing={1}
      >
        © {year} Russian Rougette
      </Typography>
    </Box>
  );
};

export default Footer;
