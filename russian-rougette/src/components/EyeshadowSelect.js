import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { FaCircle } from "react-icons/fa";
import "./EyeshadowSelect.css";
import axios from "axios";
import { buttonStyle, kBaseUrl } from "../Constants";
import Box from "@mui/material/Box";
import Loading from "./Loading";

function EyeshadowSelect({
  setPalette,
  palette,
  selectedEyeshadow,
  selectedSection,
  browboneColor,
  aboveCreaseColor,
  creaseColor,
  deepCreaseColor,
  outerLidColor,
  middleLidColor,
  innerLidColor,
  innerCornerColor,
}) {
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(true);

  // get all eyeshadows from db
  useEffect(() => {
    axios
      .get(`${kBaseUrl}/eyeshadows/${palette.id}`)
      .then((response) => {
        setFormData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [palette]);

  const handleButtonClick = (eyeshadow) => {
    console.log(eyeshadow);
    selectedEyeshadow(eyeshadow);
  };

  const handleGoBackButtonClick = () => {
    setPalette(null);
  };

  const getColor = () => {
    let color = "";
    if (selectedSection === "Browbone") {
      color = browboneColor;
    } else if (selectedSection === "Above Crease") {
      color = aboveCreaseColor;
    } else if (selectedSection === "Crease") {
      color = creaseColor;
    } else if (selectedSection === "Deep Crease") {
      color = deepCreaseColor;
    } else if (selectedSection === "Outer Lid") {
      color = outerLidColor;
    } else if (selectedSection === "Middle Lid") {
      color = middleLidColor;
    } else if (selectedSection === "Inner Lid") {
      color = innerLidColor;
    } else if (selectedSection === "Inner Corner") {
      color = innerCornerColor;
    }
    return color;
  };

  const getButton = (eyeshadow) => {
    if (selectedSection) {
      return (
        <Button
          sx={buttonStyle}
          disabled={eyeshadow.color === color}
          onClick={() => handleButtonClick(eyeshadow)}
        >
          Apply
        </Button>
      );
    }
  };
  const color = getColor();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        maxWidth: 450,
        height: 600,
        borderRadius: 3,
      }}
    >
      <h2>{palette.name}</h2>

      <Box
        sx={{
          height: 500,
          overflow: "scroll",
          backgroundColor: "#fa9b856e",
          padding: "20px",
          borderRadius: 3,
        }}
      >
        {loading ? (
          <Loading />
        ) : (
          <table>
            <thead>
              <tr>
                <th class="btn-col">
                  <Button
                    sx={buttonStyle}
                    onClick={() => {
                      handleGoBackButtonClick();
                    }}
                  >
                    Go Back
                  </Button>
                </th>
                <th class="name-td">Shade</th>
                <th class="color-td">Color</th>
                <th class="finish-td">Finish</th>
              </tr>
              <hr id="table-header-hr" />
            </thead>
            <tbody>
              {formData.map((eyeshadow) => (
                <tr>
                  <td class="btn-col">{getButton(eyeshadow)}</td>
                  <td class="name-td">{eyeshadow.name}</td>
                  <td class="color-td">
                    <FaCircle color={eyeshadow.color} class="icon" />
                  </td>
                  <td class="finish-td">{eyeshadow.finish}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Box>
    </Box>
  );
}

export default EyeshadowSelect;
