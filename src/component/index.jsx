import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Nav } from 'react-bootstrap';
import About from "./komponen/about";
import Home from "./komponen/home";
import Navigation from "./komponen/navbar";
import Contact from "./komponen/contact";
import "./style.css"

const Componen = () => {
    return (
        <div className="componen">
            <Navigation />
            <Home />
            <About />
            <Nav.Link href="https://wa.me/+6285904277619">
          <Image src="images__10_-removebg-preview.png" style={{position:"fixed", height:"70px", width:"70px", backgroundColor:"#14Cf26", borderRadius:"100%",marginTop:"-90vh", zIndex:"998", marginLeft:"80vw"}}/>
          </Nav.Link>
          <Contact />
        </div>
    )
};
export default Componen;