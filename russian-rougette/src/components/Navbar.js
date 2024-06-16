import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import logo5 from "../images/Russian (Twitter Header) (14).gif";
import { Tooltip, Box } from "@mui/material";

function Nav() {
  return (
    <Box
      component="header"
      sx={{
        zIndex: "1",
        width: "100%",
        backgroundColor: "#fcfbfb",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Link className="RR-logo-link" to="/">
        <Navbar.Brand href="#home" className="RR-logo-text">
          <Tooltip title="Home" arrow>
            <img className="rr-logo" src={logo5} alt="Russian Rougette logo" />
          </Tooltip>
        </Navbar.Brand>
      </Link>
      <Navbar.Text className="header-links">{/* {signedIn()} */}</Navbar.Text>
    </Box>
  );
}

export default Nav;
