import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card'
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "../../public/images/carouselimg1.jpg";
import Image2 from "../../public/images/carouselimg2.jpg";
import Image3 from "../../public/images/carouselimg3.jpg";
import Image4 from "../../public/images/carouselimg4.jpg";
import { App, Code, Calendar, Tv } from "react-bootstrap-icons";
import img from "../../public/images/home2.jpg";
import img1 from "../../public/images/home2_1.jpeg";
import img2 from "../../public/images/home2_2.jpg";
import img3 from "../../public/images/home2_3.jpg";
import img4 from "../../public/images/home2_4.jpg";
import img5 from "../../public/images/home2_5.jpg";

export default function FirstPost() {
  return (
    <div className='container'>
    <Carousel className="carousel col-12">
      <Carousel.Item className="caro">
        <Image className="d-block w-100" src={Image1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="caro">
        <Image className="d-block w-100" src={Image2} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="caro">
        <Image className="d-block w-100" src={Image3} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="caro"> 
        <Image className="d-block w-100" src={Image4} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
 
  )
}
