import { Container, Row, Col, Table } from "react-bootstrap";

function Schedule() {
  return (
    <Container fluid style={{ minHeight: "100vh", backgroundColor: "var(--bg-light1)" }}>
      <Row className="text-center mb-4">
        <Col>
          <h2 className="poppins-900-main">Weekly Schedule</h2>
          <p>Plan your week with our CrossFit classes and programs.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered responsive className="text-center" style={{ fontSize: ".75rem", backgroundColor: "var(--bg-light1)" }}>
            <thead>
              <tr>
                <th>Day/Time</th>
                <th>5:30 AM</th>
                <th>8:30 AM</th>
                <th>9:30 AM</th>
                <th>12 PM</th>
                <th>4:30 PM</th>
                <th>5:30 PM</th>
                <th>6:30 PM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>CrossFit</td>
                <td>CrossFit</td>
                <td>-</td>
                <td>CrossFit</td>
                <td>CrossFit</td>
                <td>CrossFit</td>
                <td>CrossFit</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>CrossFit</td>
                <td>CrossFit</td>
                <td>-</td>
                <td>CrossFit</td>
                <td>CrossFit</td>
                <td>CrossFit</td>
                <td>CrossFit</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>CrossFit</td>
                <td>CrossFit</td>
                <td>-</td>
                <td>CrossFit</td>
                <td>CrossFit</td>
                <td>CrossFit</td>
                <td>CrossFit</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>CrossFit</td>
                <td>CrossFit</td>
                <td>-</td>
                <td>CrossFit</td>
                <td>CrossFit</td>
                <td>CrossFit</td>
                <td>CrossFit</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>CrossFit</td>
                <td>CrossFit</td>
                <td>-</td>
                <td>CrossFit</td>
                <td>CrossFit</td>
                <td>CrossFit</td>
                <td>CrossFit</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>-</td>
                <td>-</td>
                <td>CrossFit</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td colSpan="7" className="text-center">
                  Rest Day
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Row className="text-center my-4">
          <p>
            <strong>Yoga Schedule:</strong> Wednesday 6:00 PM and Friday 9:30 AM.
            Classes are instructor-based/not included with CrossFit membership.
            Please contact for info.
          </p>
          <a
            href="/ContactUs"
            style={{
              color: "rgba(188, 51, 13, 1)",
              textDecoration: "underline",
            }}
          >
            *Free trials can be done during any CrossFit class*
          </a>
        </Row>
      </Row>
    </Container>
  );
}

export default Schedule;
