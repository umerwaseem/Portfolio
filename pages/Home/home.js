import Link from 'next/link';
import Head from 'next/head';

import Script from 'next/script';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Layout from '../../componets/layout';
export default function FirstPost() {
  return (
    <Container>
    <Row className='container my-5'>
      
      <Col sm={5}></Col>
    <Col sm={7}> <h1 >
        Web Designer, hobbyist writer, and the CEO & Founder of Evans
      </h1>
      <h6 >
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in
        Bookmarksgrove right at the coast of the Semantics, a large language
        ocean.
      </h6></Col>
    </Row>
  </Container>

  );
}