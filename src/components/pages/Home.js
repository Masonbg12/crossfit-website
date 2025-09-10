import { useState, useEffect } from 'react';
import { Container, Carousel, Row, Col, Button, Spinner, Card } from "react-bootstrap";
import Programs from "../Programs.js";
import OurGym from "../OurGym.js";
import FreeTrialButton from '../FreeTrialButton.js';

function Home() {
  // Loading state for the page
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Google Reviews state
  const [reviews, setReviews] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/google-reviews/reviews')
      .then(res => res.json())
      .then(data => {
        setReviews(data);
        setReviewsLoading(false);
      })
      .catch(() => setReviewsLoading(false));
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

      {/* Google Reviews Section */}
      <Row className="justify-content-center py-5" style={{ backgroundColor: "var(--bg-light1)" }}>
        <Col xs={12}>
          <h2 className="text-center mb-4 poppins-900-main" style={{ color: "var(--bg-black)" }}>
            What Our Members Say
          </h2>
        </Col>
        <Col xs={12} md={10} lg={8}>
          {reviewsLoading ? (
            <div className="text-center">
              <Spinner animation="border" />
            </div>
          ) : (
            <Carousel indicators={false} controls={reviews.length > 1} interval={7000} fade>
              {reviews.map((review, idx) => (
                <Carousel.Item key={idx}>
                  <Card className="shadow-sm mx-auto" style={{ maxWidth: 600, background: "#fff" }}>
                    <Card.Body>
                      <div className="d-flex align-items-center mb-2">
                        <img
                          src={review.profile_photo_url}
                          alt={review.author_name}
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            marginRight: 12,
                            objectFit: "cover",
                            border: "1px solid #eee"
                          }}
                        />
                        <div>
                          <a
                            href={review.author_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "var(--bg-black)", fontWeight: 700, textDecoration: "none" }}
                          >
                            {review.author_name}
                          </a>
                          <div style={{ fontSize: "0.85rem", color: "#888" }}>
                            {review.relative_time_description}
                          </div>
                        </div>
                      </div>
                      <div className="mb-2">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <span key={i} style={{ color: "#FFD700", fontSize: "1.2rem" }}>★</span>
                        ))}
                      </div>
                      <Card.Text style={{ color: "var(--bg-black)", fontSize: "1.1rem" }}>
                        "{review.text}"
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
          )}
          <div className="text-center mt-3">
            <a
              href="https://www.google.com/maps/place/CrossFit+XLR8"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--bg-black)", textDecoration: "underline" }}
            >
              See more reviews on Google
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
