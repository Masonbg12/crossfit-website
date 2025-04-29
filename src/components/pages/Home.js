import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Footer from "../../components/Footer.js";
import Programs from "../Programs.js";
import FreeTrial from "../../components/FreeTrial.js";

function Home() {
  return (
    <Container fluid>
      {/* Hero Header Section */}
      <Row className="hero-section d-flex align-items-center" style={{ height: "100vh", backgroundColor: "#f8f9fa" }}>
        <Col xs={12} md={6} className="text-center text-md-start">
          <h1>Welcome to CrossFit XLR8</h1>
          <p>
            Achieve your fitness goals with our expert coaching, supportive community, and proven CrossFit programs.
          </p>
          <Button variant="primary" size="lg">
            Learn More
          </Button>
        </Col>
        <Col xs={12} md={6} className="text-center">
          <Image
            src="https://via.placeholder.com/500x300"
            alt="Hero Section"
            fluid
            style={{ borderRadius: "10px" }}
          />
        </Col>
      </Row>

      {/* Free Trial Section */}
      <Row className="free-trial-section d-flex align-items-center" style={{ padding: "4rem 0", backgroundColor: "#e9ecef" }}>
        <Col xs={12} md={6} className="text-center">
          <FreeTrial />
        </Col>
        <Col xs={12} md={6} className="text-center">
          <Image
            src="https://via.placeholder.com/400x300"
            alt="Free Trial"
            fluid
            style={{ borderRadius: "10px" }}
          />
        </Col>
      </Row>
      
      {/* Programs Section */}
      <Programs />

      {/* Gallery/Testimonials Section */}
      <Row className="gallery-section text-center" style={{ padding: "4rem 0", backgroundColor: "#e9ecef" }}>
        <Col>
          <h2>Gallery & Testimonials</h2>
          <p>See what our members have to say and check out our facilities.</p>
          <Image
            src="https://via.placeholder.com/800x400"
            alt="Gallery"
            fluid
            style={{ borderRadius: "10px" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
