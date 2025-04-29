import { Container, Row, Col, Table } from "react-bootstrap";

function Schedule() {
  return (
    <Container style={{ padding: "2rem 0" }}>
      <Row className="text-center mb-4">
        <Col>
          <h2>Weekly Schedule</h2>
          <p>Plan your week with our CrossFit classes and programs.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Day</th>
                <th>6:00 AM</th>
                <th>9:00 AM</th>
                <th>12:00 PM</th>
                <th>5:00 PM</th>
                <th>7:00 PM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>CrossFit Basics</td>
                <td>Strength Training</td>
                <td>Open Gym</td>
                <td>WOD</td>
                <td>Mobility Class</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>Cardio Blast</td>
                <td>CrossFit Basics</td>
                <td>Open Gym</td>
                <td>Strength Training</td>
                <td>WOD</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>Strength Training</td>
                <td>WOD</td>
                <td>Open Gym</td>
                <td>CrossFit Basics</td>
                <td>Mobility Class</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>Cardio Blast</td>
                <td>Strength Training</td>
                <td>Open Gym</td>
                <td>WOD</td>
                <td>CrossFit Basics</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>CrossFit Basics</td>
                <td>WOD</td>
                <td>Open Gym</td>
                <td>Strength Training</td>
                <td>Mobility Class</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>Open Gym</td>
                <td>Team WOD</td>
                <td>Open Gym</td>
                <td>Team WOD</td>
                <td>Open Gym</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td colSpan="5" className="text-center">
                  Rest Day
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Schedule;
