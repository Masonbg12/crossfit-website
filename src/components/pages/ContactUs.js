import { Container, Row, Col, Card } from "react-bootstrap";
import FreeTrial from "../../components/FreeTrial";

function ContactUs() {
  return (
    <Container fluid style={{ padding: "2rem 0", minHeight: "100vh", backgroundColor: "var(--bg-light1)" }}>
      {/* Modern Contact Card Section */}
      <Row className="justify-content-center align-items-center mb-5" style={{ minHeight: "60vh" }}>
        <Col xs={12} md={5} className="mb-4 mb-md-0 d-flex justify-content-center">
          <Card className="shadow-lg border-0"
            style={{
              width: "100%",
              maxWidth: 520, // increased card width
              minHeight: 420, // increased card height
              padding: "2rem 1.5rem", // more internal spacing
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backgroundColor: "var(--bg-light2)",
            }}
          >
            <Card.Body>
              <Card.Title className="text-center poppins-900-sub mb-4" style={{ fontSize: "2rem" }}>
                Contact Information
              </Card.Title>
              <Card.Text className="contact-info" style={{ fontSize: "1.15rem", marginBottom: "2rem", lineHeight: "2" }}>
                <strong>Phone:</strong>
                <br />
                <a href="tel:3612906969" style={{ fontSize: "1.1rem" }}>361-290-6969</a>
                <br />
                <span style={{ fontSize: "0.95rem", marginBottom: "1rem", display: "block" }}>
                  *Leave a message or send a text*
                </span>
                <strong>Email:</strong>
                <br />
                <a href="mailto:xlr8community@yahoo.com" style={{ fontSize: "1.1rem" }}>xlr8community@yahoo.com</a>
                <br />
                <strong>Address:</strong>
                <br />
                <span style={{ fontSize: "1.1rem" }}>202 Hwy 35, Gregory, TX, USA</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={5} className="d-flex flex-column align-items-center">
          <img
            src="/media/coaches/brian-bike.jpg"
            alt="Coach Brian on bike"
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "auto",
              borderRadius: "0.75rem",
              marginBottom: "2rem",
              objectFit: "cover"
            }}
          />
          <div
            style={{
              width: "100%",
              backgroundColor: "var(--bg-dark, #274c77)",
              borderRadius: "0.75rem",
              padding: "2rem 1.5rem",
              marginBottom: "2rem"
            }}
          >
            <FreeTrial />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
