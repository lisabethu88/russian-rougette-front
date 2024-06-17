import "../App.css";
import "./Home.css";
import { Button, Box, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import { Typography, List, ListItemText } from "@mui/material";
import { bodyFont, buttonStyle, headerFont } from "../Constants";
import background from "../images/hero-img.png";

const Home = () => {
  return (
    <Box
      component="main"
      sx={{
        backgroundImage: `url('${background}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        // height: "100%",
        // overflow: "scroll",
      }}
    >
      <Box
        sx={{
          backdropFilter: { xs: "blur(100px)", sm: "blur(0px)" },
          width: { xs: "100%", sm: "50%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "fit-content",
          padding: 5,
          gap: 6,
        }}
      >
        <Box sx={{}}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              fontFamily={headerFont}
              fontWeight={400}
              color={"#0a97b1"}
              fontSize={40}
              width={"fit-content"}
              padding={1}
              borderRadius={2}
              sx={{ textShadow: "2px 2px 0px white" }}
            >
              Welcome!
            </Typography>
            <Typography
              variant="body1"
              fontFamily={bodyFont}
              fontSize={18}
              width="100%"
              textAlign={"center"}
              maxWidth="600px"
            >
              Discover the ultimate eyeshadow visualizer designed to transform
              your makeup experience. With Russian Rougette, you can explore an
              extensive collection of eyeshadows from popular palettes and see
              how they look on different sections of the eyelid. Whether you're
              a makeup enthusiast or a professional artist, our tool empowers
              you to experiment, create, and perfect your eye makeup looks
              effortlessly. Dive into a world of colors and creativity—your
              perfect eyeshadow combination is just a few clicks away!
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            height: "fit-content",
            width: "100%",
          }}
        >
          <Typography
            variant="body1"
            fontFamily={headerFont}
            fontWeight={400}
            color={"#0a97b1"}
            fontSize={40}
            width={"fit-content"}
            padding={1}
            borderRadius={2}
            textAlign={"center"}
            sx={{ textShadow: "2px 2px 0px white" }}
          >
            Choose from two options:
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "baseline",
              gap: 2,
              height: "100%",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                height: "100%",
                flexWrap: "wrap",
              }}
            >
              <Link to="/freeplay">
                <Button variant="contained" sx={buttonStyle}>
                  Free Play
                </Button>
              </Link>
              <Typography
                variant="body1"
                fontFamily={bodyFont}
                fontSize={18}
                width="100%"
                textAlign={"center"}
                padding={2}
                sx={{ width: "250px" }}
              >
                Choose any eyeshadows you want and create your own custom looks.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                height: "100%",
                flexWrap: "wrap",
              }}
            >
              <Link to="/roulette">
                <Button variant="contained" sx={buttonStyle}>
                  Roulette
                </Button>
              </Link>
              <Typography
                variant="body1"
                fontFamily={bodyFont}
                fontSize={18}
                width="100%"
                textAlign={"center"}
                padding={2}
                sx={{ width: "250px" }}
              >
                Spin the wheel and let it randomly generate a unique look for
                you based on a selected palette.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
