import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from '../../public/images/home2.jpg'
import img1 from '../../public/images/home2_1.jpeg'
import img2 from '../../public/images/home2_2.jpg'
import img3 from '../../public/images/home2_3.jpg'
import img4 from '../../public/images/home2_4.jpg'
import img5 from '../../public/images/home2_5.jpg'
import Image from 'next/image'
export default function FirstPost() {
  return (
    <Container>
    <Row className="my-5">
      <Col> <h1 className="h1">MIDWAY</h1>
              <h6 className="h6_1">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove.
              </h6></Col>
      <Col><Image
        src={img}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      /></Col>
    </Row>
    <Row className="my-5">
      <Col><Image
        src={img1}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      /></Col>
      <Col> <h1 className="h2">Workplace Office</h1>
              <h6 className="h6_2">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove.
              </h6></Col>
    
    </Row>
    <Row className="my-5">
      <Col><h1 className="h3">PRICKLY</h1>
              <h6 className="h6_3">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove.
              </h6></Col>
      <Col><Image
        src={img2}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      /></Col>
    </Row>
    <Row className="my-5">
      <Col><Image
        src={img3}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      /></Col>
      <Col> <h1 className="h4">Topless</h1>
              <h6 className="h6_4">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove.
              </h6></Col>
    
    </Row>
    <Row className="my-5">
      <Col><h1 className="h5">Fashion Style</h1>
              <h6 className="h6_5">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove.
              </h6></Col>
      <Col><Image
        src={img4}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      /></Col>
    </Row>
    <Row className="my-5">
      <Col><Image
        src={img5}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      /></Col>
      <Col>  <h1 className="h6">PRICKLY</h1>
              <h6 className="h6_6">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove.
              </h6></Col>
    
    </Row>
  </Container>
  );
}
