import "../App.css";
import "./Home.css";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


// const user = JSON.parse(localStorage.getItem("user"));


const Home = () => {

  return (
    <main className="home-container">
      <section class="link">
      <Link to="/freeplay">
          <Button variant="primary home-btns free-play-btn">
            Free Play
          </Button>
        </Link>
        <Link to="/roulette">
          <Button variant="primary home-btns roulette-btn">
            Russian Rougette
          </Button>
        </Link> 
      </section>
    </main>
   
  );
};


export default Home;
