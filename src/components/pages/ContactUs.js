import { Container, Row, Col, Card } from "react-bootstrap";
import FreeTrial from "../../components/FreeTrial";

function ContactUs() {
  return (
    <Container fluid style={{ padding: "2rem 0", minHeight: "100vh"}}>
      {/* Info Card Section */}
      <Row className="mb-5">
        <Col xs={12} md={6} className="mx-auto">
          <Card>
            <Card.Body>
              <Card.Title className="text-center poppins-900-sub">Contact Information</Card.Title>
              <Card.Text className="contact-info">
                <strong>Phone: *Leave a message or send a text to*</strong> 361-290-6969 <br />
                <strong>Email:</strong> <a href="mailto:xlr8community@yahoo.com">xlr8community@yahoo.com</a> <br />
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
