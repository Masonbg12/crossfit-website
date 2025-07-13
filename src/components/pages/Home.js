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
    src: "/media/gallery/america-bra.jpg",
    alt: "workout action photo"
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
    src: "/media/gallery/running-peace.jpg",
    alt: "workout action photo"
  },
  {
    src: "/media/gallery/parents-partner.jpg",
    alt: "workout action photo"
  },
  {
    src: "/media/gallery/running-smiling.jpg",
    alt: "workout action photo"
  }
];

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
              "linear-gradient(to right, #000 0%, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0) 100%)",
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
              "linear-gradient(to right, #000 0%, #000 20%)",
            flexShrink: 0,
            flexGrow: 0,
            zIndex: 1,
            }}
          />
            <source src="/media/crossfit-stitched-video.mp4" type="video/mp4" />
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

      {/* Our Gym Section */}
      <OurGym />

      {/* Programs Section */}
      <Programs />

      {/* Gallery Section */}
      <Row
        className="text-center bg-light2"
        style={{ padding: "4rem 0" }}
      >
        <Col>
          <h2 className="text-center mb-4 poppins-900-main">Gallery</h2>
          <div className="carousel-outer-wrap">
            <Carousel
              interval={null}
              indicators={gallery.length > 1}
              controls={true}
              className="custom-carousel-controls"
              style={{ maxWidth: "75vw", width: "100%", margin: "0 auto" }}
            >
              {gallery.map((img, idx) => (
                <Carousel.Item key={idx}>
                  <div className="d-flex justify-content-center">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="d-block w-75 img-fluid"
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
