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
            width: "30vw",
            height: "100vh",
            background: "#000",
            flexShrink: 0,
            flexGrow: 0,
          }}
        />
        {/* Right 62%: Video */}
        <div
          style={{
            width: "70vw",
            height: "100vh",
            position: "relative",
            overflow: "hidden",
            flexShrink: 0,
            flexGrow: 0,
            background:
              "linear-gradient(to right, #000 0%, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)",
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
              zIndex: -1,
              background: "#000",
            }}
          >
          <div
            style={{
            width: "100vw",
            height: "100vh",
            background:
              "linear-gradient(to right, #000 0%, #000 30%)",
            flexShrink: 0,
            flexGrow: 0,
            zIndex: 1,
            }}
          />
            <source src="/crossfit-stitched-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Text content overlays left 38% (black + gradient), left-aligned */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "38vw", // 25vw + 13vw
            height: "100vh",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingLeft: "4vw",
            pointerEvents: "none", // allows video interaction if needed
          }}
        >
          <div style={{ pointerEvents: "auto" }}>
            <h1 className="poppins-900-main" style={{ color: "#fff" }}>
              WELCOME TO CROSSFIT XLR8
            </h1>
            <p style={{ color: "#fff" }}>
              Achieve your fitness goals with our expert coaching, supportive
              community, and proven CrossFit programs.
            </p>
            <Button variant="primary" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Free Trial Section */}
      <Row
        className="d-flex align-items-center bg-light2"
        style={{ padding: "4rem 0" }}
      >
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
      <Row
        className="gallery-section text-center bg-light2"
        style={{ padding: "4rem 0" }}
      >
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
