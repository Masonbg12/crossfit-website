import { Row, Col } from "react-bootstrap";

function Programs() {
  return (
    // Programs Section
    <Row className="programs-section text-center" style={{ padding: "4rem 0", backgroundColor: "#f8f9fa" }}>
      <Col>
        <h2>Our Programs</h2>
        <p>Explore our wide range of CrossFit programs tailored to all fitness levels.</p>
        <Row>
          <Col xs={12} md={4}>
            <h4>Program 1</h4>
            <p>Details about Program 1.</p>
          </Col>
          <Col xs={12} md={4}>
            <h4>Program 2</h4>
            <p>Details about Program 2.</p>
          </Col>
          <Col xs={12} md={4}>
            <h4>Program 3</h4>
            <p>Details about Program 3.</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Programs;
