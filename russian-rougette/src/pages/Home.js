import { Link } from "react-router-dom";
import "../App.css";
import "./Home.css";
import EyeshadowSelect from "../components/EyeshadowSelect"; 
import Button from "react-bootstrap/Button";
import EyeVisual from "../components/EyeVisual";
// const user = JSON.parse(localStorage.getItem("user"));

const Home = () => {
  return (
    <main className="home-container">
      <EyeshadowSelect></EyeshadowSelect>
      <EyeVisual></EyeVisual>
    </main>
  );
};

export default Home;
