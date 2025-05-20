import { Container, Row, Col, Card } from "react-bootstrap";
import FreeTrial from "../../components/FreeTrial";

function ContactUs() {
  return (
    <Container style={{ padding: "2rem 0", minHeight: "100vh"}}>
      {/* Info Card Section */}
      <Row className="mb-5">
        <Col xs={12} md={6} className="mx-auto">
          <Card>
            <Card.Body>
              <Card.Title className="text-center poppins-900-sub">Contact Information</Card.Title>
              <Card.Text className="contact-info">
                <strong>Phone:</strong> 361-444-3316 <br />
                <strong>Email:</strong> <a href="mailto:info@crossfitxlr8.com">info@crossfitxlr8.com</a> <br />
                <strong>Address:</strong> 202 Hwy 35, Gregory, TX, USA
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Free Trial Section */}
      <Row>
        <Col>
          <FreeTrial />
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
