import { useState, useEffect } from 'react';
import { Container, Carousel, Row, Col, Button, Spinner } from "react-bootstrap";
import Programs from "../Programs.js";
import OurGym from "../OurGym.js";
import FreeTrialButton from '../FreeTrialButton.js';

const gallery = [
  {
    src: "/media/gallery/side-sign.webp",
    alt: "side building sign"
  },
  {
    src: "/media/gallery/running-wave.webp",
    alt: "workout action photo"
  },
  {
    src: "/media/gallery/group-outside.webp",
    alt: "group photo"
  },
  {
    src: "/media/gallery/parents-partner.webp",
    alt: "workout action photo"
  }
];

function Home() {
  // Loading state for the page
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Show loading screen
  if (loading) return (
    <Container fluid style={{ 
      backgroundColor: "var(--bg-light1)", 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      flexDirection: "column" 
    }}>
      <Spinner animation="border" role="status" style={{ width: "3rem", height: "3rem", color: "var(--bg-black)" }}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p className="poppins-700 text-center mt-3" style={{ color: "var(--bg-black)" }}>Loading...</p>
    </Container>
  );

  return (
    <Container fluid style={{ padding: 0, margin: 0, overflow: "hidden" }}>
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
        {/* Left 30%: Black */}
        <div
          className="black-box"
          style={{
            width: "30vw",
            height: "100vh",
            background: "#000",
            flexShrink: 0,
            flexGrow: 0,
          }}
        />
        {/* Right 70%: Fallback Image Only */}
        <div
          className="video-container"
          style={{
            width: "70vw",
            height: "100vh",
            position: "relative",
            overflow: "hidden",
            flexShrink: 0,
            flexGrow: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: "url('/media/gallery/group-photo.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            src="/media/group-photo.webp"
            alt="smiling group"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
              transition: "opacity 0.5s"
            }}
          />
          <div
            className="hero-gradient-overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0) 60%)",
              zIndex: 3,
              pointerEvents: "none",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "38vw",
            height: "100vh",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingLeft: "4vw",
            pointerEvents: "none",
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
            <Row>
              <Col>
                <Button
                  href="/AboutUs"
                  variant="primary"
                  size="md"
                  style={{
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginRight: "10px"
                  }}
                >
                  Learn More
                </Button>
                <FreeTrialButton 
                  buttonText='Free Trial'
                  variant="primary"
                  size="md"
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>

      {/* Our Gym Section */}
      <OurGym />

      {/* Programs Section */}
      <Programs />

      {/* Gallery Section */}
      <Row
        className="text-center"
        style={{ padding: "4rem 0", backgroundColor: "var(--bg-light1)" }}
      >
        <Col>
          <h2 className="text-center mb-4 poppins-900-main" style={{color: "var(--bg-black)"}}>Gallery</h2>
          <div className="carousel-outer-wrap">
            <Carousel
              interval={null}
              indicators={gallery.length > 1}
              controls={true}
              fade={true}
              style={{ margin: "0 auto" }}
            >
              {gallery.map((img, idx) => (
                <Carousel.Item key={idx}>
                  <div className="d-flex justify-content-center">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="d-block gallery-image"
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
