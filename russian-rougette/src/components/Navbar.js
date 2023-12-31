import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./Navbar.css";
import logo4 from "../images/rr_logo_4.png";
import logo5 from "../images/rr_logo_5.png"



const user = JSON.parse(localStorage.getItem('user'));

function Nav() {
  const logOut = () =>{
    localStorage.removeItem('user');
   // localStorage.removeItem('booking');

  }
  const signedIn = () =>{
    if (user){
    return (
      <section> 
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Navbar.Text className="signed-in">
        Signed in as: <a href="/dashboard">{user.name}</a>
      </Navbar.Text>
      <Navbar.Text className="log-out">
        <a onClick={logOut} href="/">Log out</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </section>    
    )
    }
    else{
      return (
        <section>

        <Link to="/signup">
          <Button class="nav-button">Sign Up</Button>
        </Link>{" "}

        <Link to="/login">
          <Button class ="nav-button">Log In</Button>
        </Link>{" "}
        </section>
        )
    }
  }

  return (
    <header>
      <Navbar className="Nav navbar-container">
          <Link className="RR-logo-link" to="/">
            <Navbar.Brand href="#home" className="RR-logo-text">
              <img className="rr-logo" src={logo5} alt="Russian Rougette logo" />
            </Navbar.Brand> 
            </Link>
            <Navbar.Text className="header-links">
            {/* {signedIn()} */}

          </Navbar.Text>
      </Navbar>
    </header>
  );
}

export default Nav;
