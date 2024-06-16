import "./TheLook.css";
import { Box, List } from "@mui/material";
import { Typography } from "@mui/material";
import { ListItemText } from "@mui/material";

const TheLook = ({
  browboneShade,
  aboveCreaseShade,
  creaseShade,
  deepCreaseShade,
  outerLidShade,
  middleLidShade,
  innerLidShade,
  innerCornerShade,
}) => {
  const toggleText = (shade) => {
    if (shade.name) {
      return (
        <List
          className="box-shadow"
          sx={{
            padding: 1,
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          <ListItemText
            primary={"Shade"}
            secondary={shade.name}
            sx={{
              backgroundColor: "#f2c5ba",
              borderRadius: 2,
              padding: 1,
              width: "min-content",
            }}
            primaryTypographyProps={{
              color: "#544131",
              fontWeight: "bold",
              width: "fit-content",
            }}
            secondaryTypographyProps={{
              color: "#6e5555",
              width: "fit-content",
            }}
          />
          <hr />
          <ListItemText
            primary={"Palette/Brand"}
            secondary={`${shade.palette_name} - ${shade.brand}`}
            sx={{
              backgroundColor: "#f2c5ba",
              borderRadius: 2,
              padding: 1,
              width: "min-content",
            }}
            primaryTypographyProps={{
              color: "#544131",
              fontWeight: "bold",
              width: "fit-content",
            }}
            secondaryTypographyProps={{
              color: "#6e5555",
              width: "fit-content",
            }}
          />
        </List>
      );
    } else {
      return (
        <Typography
          sx={{
            margin: "5px auto",
            textAlign: "center",
          }}
        >
          --
        </Typography>
      );
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: 450,
        height: 600,
      }}
    >
      <h2>The Look</h2>
      <Box
        sx={{
          width: "100%",
          height: 500,
          backgroundColor: "#fa9b856e",
          borderRadius: 3,
          overflow: "scroll",
        }}
      >
        <h5>Browbone</h5>
        {toggleText(browboneShade)}
        <h5>Above Crease</h5>
        {toggleText(aboveCreaseShade)}
        <h5>Crease</h5>
        {toggleText(creaseShade)}
        <h5>Deep Crease</h5>
        {toggleText(deepCreaseShade)}
        <h5>Outer Lid</h5>
        {toggleText(outerLidShade)}
        <h5>Middle Lid</h5>
        {toggleText(middleLidShade)}
        <h5>Inner Lid</h5>
        {toggleText(innerLidShade)}
        <h5>Inner Corner</h5>
        {toggleText(innerCornerShade)}
      </Box>
    </Box>
  );
};
export default TheLook;
