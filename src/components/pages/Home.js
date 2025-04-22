import { Container, Row, Col, Image } from "react-bootstrap";
import logo from "../../logos/CrossFit_logo.png";
import Footer from "../../components/Footer.js";

function Home() {
  return (
    <Container>
      <Row className="hero-header">
        <Col xs={12} md={6}>
          <h3>This will be the hero header section.</h3>
          <Image src={logo} fluid></Image>
        </Col>
        <Col xs={12} md={6}>
          <h3>This will be the free trial button and intro section.</h3>
        </Col>
      </Row>
      <Row>
        <h3>This is the programs section.</h3>
      </Row>
      <Row>
        <h3>This is the carousel section for the gallery/testimonials.</h3>
      </Row>
    </Container>
  );
}

export default Home;
