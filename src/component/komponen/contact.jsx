import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Image } from 'react-bootstrap';
const Contact = () => {
  return (
    <div style={{width:"100vw", backgroundColor:"white"}}>
    <div style={{backgroundColor:"#14CF26", width:"150px", textAlign:"center", position:"absolute", marginTop:"-150px"}}>
          <h3>Kontak Kami</h3>
          <div>
          <div className="home-kontak d-flex">
          <Image src="images__10_-removebg-preview.png" style={{height:"25px", width:"25px"}}/>
          <p className="home-kontak-font">085904277619</p>
          </div>
          </div>
          </div>
    </div>
    )
}

export default Contact;