import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import PaletteDropdown from "./PaletteDropdown";
import { buttonStyle } from "../Constants";

const PaletteTable = ({ palettesData, selectedPalette, handleSort }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const handleButtonClick = (palette) => {
    selectedPalette(palette);
    setSelectedButton(palette.name);
  };
  const getButton = (palette) => {
    return (
      <Button
        sx={buttonStyle}
        id={palette.name}
        disabled={palette.name === selectedButton}
        onClick={() => handleButtonClick(palette)}
      >
        Select
      </Button>
    );
  };
  return (
    <TableContainer
      component={Box}
      sx={{
        borderRadius: 3,
        maxWidth: 450,
        width: "100%",
        // backgroundColor: "#fa9b856e",
        padding: 1,
      }}
    >
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <PaletteDropdown handleSort={handleSort} />
      </Box>
      <Table aria-label="simple table">
        <TableHead sx={{ borderBottom: "1px solid rgba(224, 224, 224, 1)" }}>
          <TableRow>
            <TableCell sx={{ fontWeight: 700 }}>Name</TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="right">
              Brand
            </TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {palettesData.map((palette) => (
            <TableRow
              key={palette.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                border: 0,
              }}
            >
              <TableCell component="th" scope="row">
                {palette.name}
              </TableCell>
              <TableCell align="right">{palette.brand}</TableCell>
              <TableCell align="right">{getButton(palette)}</TableCell>
              <TableCell align="right">{palette.carbs}</TableCell>
              <TableCell align="right">{palette.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default PaletteTable;
