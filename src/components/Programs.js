import { Row, Col } from "react-bootstrap";

function Programs() {
  return (
    // Programs Section
    <Row className="programs-section text-center bg-light1" style={{ padding: "4rem 0"}}>
      <Col>
        <h2 className="poppins-900-sub">Our Programs</h2>
        <p>Explore our wide range of CrossFit programs tailored to all fitness levels.</p>
        <Row>
          <Col xs={12} md={4}>
            <h4 className="poppins-900-sub">CrossFit</h4>
            <p>Details about Program 1.</p>
          </Col>
          <Col xs={12} md={4}>
            <h4 className="poppins-900-sub">CrossFit Kids</h4>
            <p>Details about Program 2.</p>
          </Col>
          <Col xs={12} md={4}>
            <h4 className="poppins-900-sub">Yoga</h4>
            <p>Details about Program 3.</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Programs;
