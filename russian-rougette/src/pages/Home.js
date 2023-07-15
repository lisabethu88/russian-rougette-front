import "../App.css";
import "./Home.css";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import hand from "../images/hand-gif-3.gif"


// const user = JSON.parse(localStorage.getItem("user"));


const Home = () => {

  return (
    <main className="home-container">
      <section className="welcome-message">
      <h1>WELCOME!</h1>
      <p>Choose from a variety of eyeshadow palettes and create stunning looks.</p>
      <p>Apply the selected eyeshadow shades to the image of an eyelid and visualize your unique eye makeup.</p>
      <p>Get creative and experiment with different color combinations for endless possibilities!</p>
      <p>Choose from two options:</p>
    </section>
    <section class="link">
          <section class="play-btn-section">
            <img class="hand-gif" src={hand} alt="pointing hand"/>
            <Link to="/freeplay">
                <Button variant="primary home-btns free-play-btn">
                  Free Play
                </Button>
            </Link>
            <p class="free-play-text">Choose any eyeshadows you want and create your own custom looks.</p>
          </section>
          <section class="play-btn-section">
          <img class="hand-gif-2" src={hand} alt="pointing hand"/>
            <Link to="/roulette">
              <Button variant="primary home-btns roulette-btn">
                Russian Rougette
              </Button>
            </Link> 
            <p class="free-play-text">Spin the wheel and let it randomly generate a unique look for you based on a selected palette.</p>
          </section>
    </section>
    </main>
   
  );
};


export default Home;
