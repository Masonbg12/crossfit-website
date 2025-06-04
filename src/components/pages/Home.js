import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Programs from "../Programs.js";
import FreeTrial from "../../components/FreeTrial.js";

function Home() {
  return (
    <Container fluid style={{ padding: 0, margin: 0 }}>
      {/* Hero Header Section */}
      <div
        className="hero-section"
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left 25%: Black */}
        <div
          style={{
            width: "25vw",
            height: "100vh",
            background: "#000",
            flexShrink: 0,
            flexGrow: 0,
          }}
        />
        {/* Middle 13%: Gradient */}
        <div
          style={{
            width: "29vw",
            height: "100vh",
            background: "linear-gradient(to right, #000 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.3) 75%, rgba(0,0,0,0) 100%)",
            flexShrink: 0,
            flexGrow: 0,
          }}
        />
        {/* Right 50%: Video */}
        <div
          style={{
            width: "50vw",
            height: "100vh",
            position: "relative",
            overflow: "hidden",
            flexShrink: 0,
            flexGrow: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              background: "#000",
            }}
          >
            <source src="/Third_Draft.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Text content: overlays left 33% (black + gradient), left-aligned */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "38vw", // 25vw + 13vw
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingLeft: "3vw",
            zIndex: 2,
            background: "rgba(0,0,0,0.97)",
          }}
        >
          <h1 className="poppins-900-main" style={{ color: "#fff" }}>WELCOME TO CROSSFIT XLR8</h1>
          <p style={{ color: "#fff" }}>
            Achieve your fitness goals with our expert coaching, supportive community, and proven CrossFit programs.
          </p>
          <Button variant="primary" size="lg">
            Learn More
          </Button>
        </div>
      </div>

      {/* Free Trial Section */}
      <Row className="d-flex align-items-center bg-light2" style={{ padding: "4rem 0" }}>
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
      <Row className="gallery-section text-center bg-light2" style={{ padding: "4rem 0" }}>
        <Col>
          <h2 className="poppins-900-main">Gallery & Testimonials</h2>
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
