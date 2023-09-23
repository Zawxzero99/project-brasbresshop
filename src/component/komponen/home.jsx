import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Image } from 'react-bootstrap';
// import Image from 'react-bootstrap/Image';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Home() {
    return (
        <div className="home">
          <Carousel className="mt-5">
            <Carousel.Item>
                <Image src="Screenshot_2023-09-18-18-56-44-017_com.canva.editor-edit.jpg" style={{ height: "500px", width: "100%" }} />
                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="Screenshot_2023-09-18-13-55-21-660_com.canva.editor-edit.jpg" style={{ height: "500px", width: "100%" }} fluid />
                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="Screenshot_2023-09-18-14-38-59-350_com.canva.editor-edit.jpg" style={{ height: "500px", width: "100%" }} />
                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
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
    );
}

export default Home;