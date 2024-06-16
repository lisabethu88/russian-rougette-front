import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
      }}
    >
      <CircularProgress sx={{ color: "#0a97b1" }} />
      <Typography>Loading...</Typography>
    </Box>
  );
}
