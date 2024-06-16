import { useState, useEffect } from "react";
import { Button, Dropdown } from "react-bootstrap";
import "./PaletteSelect.css";
import axios from "axios";
import { buttonStyle, kBaseUrl } from "../Constants";
import { Box, Typography } from "@mui/material";
import PaletteTable from "./PaletteTable";
import Loading from "./Loading";

const PaletteSelect = ({ selectedPalette }) => {
  //sort state
  const [palettesData, setPalettesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedButton, setSelectedButton] = useState(null);

  const handleSort = (option) => {
    let sortedData = [...palettesData];
    if (option === "name-a-z") {
      sortedData.sort((a, b) => {
        // Sort by name in ascending order
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    } else if (option === "name-z-a") {
      sortedData.sort((a, b) => {
        // Sort by name in ascending order
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
      });
    } else if (option === "brand-a-z") {
      sortedData.sort((a, b) => {
        // Sort by name in ascending order
        if (a.brand < b.brand) return -1;
        if (a.brand > b.brand) return 1;
        return 0;
      });
    } else if (option === "brand-z-a") {
      sortedData.sort((a, b) => {
        // Sort by name in ascending order
        if (a.brand > b.brand) return -1;
        if (a.brand < b.brand) return 1;
        return 0;
      });
    }

    setPalettesData(sortedData);
  };

  //get all palettes
  useEffect(() => {
    axios
      .get(`${kBaseUrl}/palettes`)
      .then((response) => {
        setPalettesData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 450,
        height: 600,
      }}
    >
      <h2>Eyeshadow Palettes</h2>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          borderRadius: 3,
          height: 500,
          backgroundColor: "#fa9b856e",
        }}
      >
        {loading ? (
          <Loading />
        ) : (
          <PaletteTable
            palettesData={palettesData}
            selectedPalette={selectedPalette}
            handleSort={handleSort}
          />
        )}
        {/* <table id="palette-table">
          <thead>
            <tr class="sort-filter-btns">
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="sort-dropdown">
                  Sort By
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleSort("name-a-z")}>
                    Name A-Z
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSort("name-z-a")}>
                    Name Z-A
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSort("brand-a-z")}>
                    Brand A-Z
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSort("brand-z-a")}>
                    Brand Z-A
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </tr>
            <tr>
              <th class="palette-th"> Name</th>
              <th class="palette-th">Brand</th>
            </tr>
            <hr />
          </thead>

          <tbody>
            {palettesData.map((palette) => (
              <section>
                <tr>
                  <td class="name-td">{palette.name}</td>
                  <td class="brand-td">{palette.brand}</td>
                  <td class="button-td">{getButton(palette)}</td>
                </tr>
                <hr />
              </section>
            ))}
          </tbody>
        </table> */}
      </Box>
    </Box>
  );
};

export default PaletteSelect;
