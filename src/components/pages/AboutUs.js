import { Container, Row, Col, Accordion } from "react-bootstrap";
import Programs from "../Programs";

function AboutUs() {
  return (
    <Container style={{ padding: "2rem 0" }}>
      {/* Our Story Section */}
      <Row className="mb-5" style={{backgroundColor: "#f8f9fa" }}>
        <Col>
          <h2 className="text-center">Our Gym</h2>
          <p className="text-center">
            Located on Hwy 35 in the “gateway” of Portland and Gregory, we have a 13,000 square foot facility and a 400 meter track to run! Our facility offers men and women’s showers, full kitchen, apparel shop. In our main gym area we are all equipped for the CrossFit WODs and another designated area equipped with a squat cage, jerk boxes, 5-atlas balls, and tumbling gymnastic mats. We have a dedicated Cardio Kickboxing room with additional men and women’s restrooms in close vicinity. We also have a new yoga room with the perfect vibe. We have 5 large rollup doors that lead to a 100’ covered porch with turf for outside activities. We have an asphalt track, rope climbing station with 6- 25′ ropes, as well as a children’s playground and basketball hoop. The facility also includes a camera system to check form and yes, integrity, and finally, surround sound Peavey sound system with mixer and microphones.
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
