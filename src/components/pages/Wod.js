import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Wod() {
  const [workouts, setWorkouts] = useState([]); // State to store WODs
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors
  const mongoURL = "/localhost:5000/data"; // MongoDB URI

  // Fetch WODs from the backend
  useEffect(() => {
    const fetchWODs = async () => {
      try {
        const response = await fetch(mongoURL);
        if (!response.ok) {
          throw new Error("Failed to fetch WODs");
        }
        const data = await response.json();
        console.log(data); // Log the fetched data for debugging
        setWorkouts(data); // Set the fetched WODs to state
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWODs();
  }, []);

  // Render loading or error states
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

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
        {workouts.slice(0, 10).map((workout) => ( // Show only the first 10 workouts
          <Col xs={12} md={6} lg={4} className="mb-4" key={workout._id}>
            <Card>
              <Card.Img
                variant="top"
                src={workout.images[0] || "https://via.placeholder.com/300x200"} // Use the first image or a placeholder
                alt={`${workout.title} workout`}
              />
              <Card.Body>
                <Card.Title>{workout.title}</Card.Title>
                <Card.Text>{workout.description}</Card.Text>
                <Card.Text>
                  <small className="text-muted">Date: {new Date(workout.date).toLocaleDateString()}</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Wod;