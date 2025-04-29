import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Wod() {
  const workouts = [
    {
      day: "Monday",
      image: "https://via.placeholder.com/300x200",
      description: "Start your week strong with a mix of cardio and strength training.",
    },
    {
      day: "Tuesday",
      image: "https://via.placeholder.com/300x200",
      description: "Focus on endurance with a high-intensity interval training session.",
    },
    {
      day: "Wednesday",
      image: "https://via.placeholder.com/300x200",
      description: "Midweek strength training to build muscle and improve form.",
    },
    {
      day: "Thursday",
      image: "https://via.placeholder.com/300x200",
      description: "Cardio blast to keep your heart rate up and burn calories.",
    },
    {
      day: "Friday",
      image: "https://via.placeholder.com/300x200",
      description: "End the week with a challenging WOD to test your limits.",
    },
    {
      day: "Saturday",
      image: "https://via.placeholder.com/300x200",
      description: "Team WOD to build camaraderie and push each other to succeed.",
    },
    {
      day: "Sunday",
      image: "https://via.placeholder.com/300x200",
      description: "Rest day. Take time to recover and prepare for the week ahead.",
    },
  ];

  const archives = [
    { month: "March 2025", link: "/wod/march-2025" },
    { month: "February 2025", link: "/wod/february-2025" },
    { month: "January 2025", link: "/wod/january-2025" },
  ];

  return (
    <Container style={{ padding: "2rem 0" }}>
      {/* Current Week's Workouts Section */}
      <Row className="text-center mb-4">
        <Col>
          <h2>Workout of the Day (WOD)</h2>
          <p>Stay motivated with our daily workouts tailored to challenge and inspire you.</p>
        </Col>
      </Row>
      <Row>
        {workouts.map((workout, index) => (
          <Col xs={12} md={6} lg={4} className="mb-4" key={index}>
            <Card>
              <Card.Img variant="top" src={workout.image} alt={`${workout.day} workout`} />
              <Card.Body>
                <Card.Title>{workout.day}</Card.Title>
                <Card.Text>{workout.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Archive Section */}
      <Row className="text-center mt-5">
        <Col>
          <h2>Archive</h2>
          <p>Explore previous months' workouts and stay on track with your fitness journey.</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {archives.map((archive, index) => (
          <Col xs={12} md={4} className="mb-3 text-center" key={index}>
            <Button variant="outline-primary" href={archive.link} size="lg">
              {archive.month}
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Wod;
