import { Row, Col } from "react-bootstrap";

function Programs() {
  return (
    // Programs Section
    <Row className="text-center bg-light2" style={{ padding: "4rem 0", color: "var(--bg-black)" }}>
      <Col>
        <h2 className="poppins-900-main">Our Programs</h2>
        <p>Explore our programs tailored to all fitness levels.</p>
        <Row>
          <Col xs={12} md={4}>
            <h4 className="poppins-900-sub">CrossFit</h4>
            <p>CrossFit is a fitness program that produces measurable outcomes through lifestyle changes, centered on training and nutrition. Workouts consist of constantly varied, high-intensity, functional movements, and are most fun and effective among friends at our gym.</p>
          </Col>
          <Col xs={12} md={4}>
            <h4 className="poppins-900-sub">CrossFit Kids</h4>
            <p>CrossFit Kids is a seasonal program that teaches foundational movement patterns, providing children with a portion of their prescribed amount of exercise for the week, improving muscular fitness, and discussing roles for food while keeping the class and it's information fun and engaging.</p>
          </Col>
          <Col xs={12} md={4}>
            <h4 className="poppins-900-sub">Yoga</h4>
            <p>Our yoga is a functional alignment class with focus on joint alignment and muscle engagement in each pose. Students are encouraged to focus on their breath and alignment throughout the session.</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Programs;
