import { Container, Carousel, Row, Col, Button } from "react-bootstrap";
import Programs from "../Programs.js";
import OurGym from "../OurGym.js";

const gallery = [
  {
    src: "/media/gallery/group-photo.jpg",
    alt: "group photo"
  },
  {
    src: "/media/gallery/side-sign.jpg",
    alt: "side building sign"
  },
  {
    src: "/media/gallery/running-wave.jpg",
    alt: "workout action photo"
  },
  {
    src: "/media/gallery/group-outside.jpg",
    alt: "group photo"
  },
  {
    src: "/media/gallery/parents-partner.jpg",
    alt: "workout action photo"
  }
];

function Home() {
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
        {/* Right 70%: Video */}
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
          }}
        >
          <div
            className="hero-gradient-overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0) 80%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
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
              zIndex: 1,
              background: "#000",
            }}
          >
            <source src="/media/crossfit-compressed.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div
            className="hero-gradient-overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
        </div>
        {/* Text Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "38vw",
            height: "100vh",
            zIndex: 2,
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
            <Button
              href="/AboutUs"
              size="lg"
            >
              Learn More
            </Button>
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
          <h2 className="text-center mb-4 poppins-900-main">Gallery</h2>
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
