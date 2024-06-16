//export const kBaseUrl = 'http://localhost:5000'
export const kBaseUrl = "https://russian-rougette-6b1967b06641.herokuapp.com";

export const headerFont = "Bebas Neue";
export const bodyFont = "Roboto Flex";

export const buttonStyle = {
  backgroundColor: "#df8487",
  fontFamily: bodyFont,
  fontWeight: 700,
  transition: "all 0.3s",
  "&:hover": {
    backgroundColor: "#0a97b1",
    transform: "scale(1.1)",
  },
  color: "white",
  textTransform: "none",
  width: "100%",
  "&:disabled": {
    color: "white",
    backgroundColor: "#0a97b1",

    opacity: 0.3,
  },
};
