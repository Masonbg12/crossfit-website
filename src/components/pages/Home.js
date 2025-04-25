import { Container, Row, Col, Image } from "react-bootstrap";
import Footer from "../../components/Footer.js";

function Home() {
  return (
    <Container fluid>
      <Row style={{height: "100vh"}}>
        <Col xs={12} md={6}>
          <h3>This will be the hero header section.</h3>
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
