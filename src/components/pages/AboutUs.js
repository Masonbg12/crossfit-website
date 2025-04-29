import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import Programs from "../Programs";

function AboutUs() {
  return (
    <Container style={{ padding: "2rem 0" }}>
      {/* Our Story Section */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center">Our Story</h2>
          <p>
            CrossFit XLR8 was founded with the mission to empower individuals to achieve their fitness goals through expert coaching, a supportive community, and proven CrossFit methodologies. Our journey began with a passion for fitness and a commitment to helping others transform their lives.
          </p>
        </Col>
      </Row>

      {/* Programs Section */}
      <Programs />

      {/* Meet the Coaches Section */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center">Meet the Coaches</h2>
          <Row>
            <Col xs={12} md={4} className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Coach 1"
                className="rounded-circle mb-3"
              />
              <h5>Coach John</h5>
              <p>Expert in strength training and mobility.</p>
            </Col>
            <Col xs={12} md={4} className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Coach 2"
                className="rounded-circle mb-3"
              />
              <h5>Coach Sarah</h5>
              <p>Specialist in endurance and CrossFit basics.</p>
            </Col>
            <Col xs={12} md={4} className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Coach 3"
                className="rounded-circle mb-3"
              />
              <h5>Coach Mike</h5>
              <p>Focused on high-intensity interval training.</p>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* FAQ Section */}
      <Row>
        <Col>
          <h2 className="text-center">FAQs</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is CrossFit?</Accordion.Header>
              <Accordion.Body>
                CrossFit is a high-intensity fitness program that combines elements of cardio, strength training, and functional movements.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Do I need prior experience to join?</Accordion.Header>
              <Accordion.Body>
                No prior experience is necessary! Our CrossFit Basics program is perfect for beginners.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>What should I bring to my first class?</Accordion.Header>
              <Accordion.Body>
                Comfortable workout clothes, a water bottle, and a positive attitude!
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
