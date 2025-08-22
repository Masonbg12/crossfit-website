import { Container, Row, Col, Table } from "react-bootstrap";

function Schedule() {
  const times = ["5:30 AM", "8:30 AM", "9:30 AM", "12 PM", "4:30 PM", "5:30 PM", "6:30 PM"];
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  // Schedule data: [time][day]
  const schedule = [
    // 5:30 AM
    ["CrossFit", "CrossFit", "CrossFit", "CrossFit", "CrossFit", "-", "-"],
    // 8:30 AM
    ["CrossFit", "CrossFit", "CrossFit", "CrossFit", "CrossFit", "-", "-"],
    // 9:30 AM
    ["-", "-", "-", "-", "-", "CrossFit", "-"],
    // 12 PM
    ["CrossFit", "CrossFit", "CrossFit", "CrossFit", "CrossFit", "-", "-"],
    // 4:30 PM
    ["CrossFit", "CrossFit", "CrossFit", "CrossFit", "CrossFit", "-", "-"],
    // 5:30 PM
    ["CrossFit", "CrossFit", "CrossFit", "CrossFit", "CrossFit", "-", "-"],
    // 6:30 PM
    ["CrossFit", "-", "CrossFit", "-", "-", "-", "-"],
  ];

  return (
    <Container fluid style={{ minHeight: "100vh", backgroundColor: "var(--bg-light1)" }}>
      <Row className="text-center mb-4">
        <Col>
          <h2 className="poppins-900-main" style={{ color: "var(--bg-black)" }}>Weekly Schedule</h2>
          <p style={{ color: "var(--bg-black)" }}>Plan your week with our CrossFit classes and programs.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered responsive className="text-center" style={{ fontSize: ".75rem", backgroundColor: "var(--bg-light1)" }}>
            <thead>
              <tr>
                <th>Time/Day</th>
                {days.map((day) => (
                  <th key={day}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {times.map((time, i) => (
                <tr key={time}>
                  <td>{time}</td>
                  {schedule[i].map((cell, j) =>
                    // Only render the "Rest Day" cell for Sunday in the first row, and span all rows
                    days[j] === "Sunday"
                      ? i === 0
                        ? (
                          <td key={j} rowSpan={times.length} className="text-center align-middle">
                            Rest Day
                          </td>
                        )
                        : null
                      : <td key={j}>{cell}</td>
                  )}
                </tr>
              ))}
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
              color: "var(--bg-black)",
              textDecoration: "underline",
            }}
          >
            *Free trials can be done during any CrossFit class, except Saturdays*
          </a>
        </Row>
      </Row>
    </Container>
  );
}

export default Schedule;
