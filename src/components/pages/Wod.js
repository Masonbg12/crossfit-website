import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Accordion, Spinner } from "react-bootstrap";

function Wod({ setIsLoading }) {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // API URL from environment variables
  const API_URL = process.env.REACT_APP_API_URL;
  const mongoURL = `${API_URL}/data`;

  useEffect(() => {
    const fetchWODs = async () => {
      setIsLoading && setIsLoading(true); // Set app loading state
      try {
        const response = await fetch(mongoURL);
        if (!response.ok) throw new Error("Failed to fetch WODs");
        const data = await response.json();
        setWorkouts(data);
        setLoading(false);
        setIsLoading && setIsLoading(false); // Clear app loading state
      } catch (err) {
        setError(err.message);
        setLoading(false);
        setIsLoading && setIsLoading(false); // Clear app loading state
      }
    };
    fetchWODs();
  }, [mongoURL, setIsLoading]); 

  const now = new Date();
  const visibleWorkouts = workouts.filter(workout => {
    const workoutDate = workout.date ? new Date(workout.date) : (workout.scheduledDateTime ? new Date(workout.scheduledDateTime) : null);
    if (!workoutDate) return true;
    return workoutDate <= now;
  });

  // Sort by date descending (newest first)
  const sortedVisibleWorkouts = [...visibleWorkouts].sort((a, b) => {
    const dateA = a.date ? new Date(a.date) : (a.scheduledDateTime ? new Date(a.scheduledDateTime) : new Date(0));
    const dateB = b.date ? new Date(b.date) : (b.scheduledDateTime ? new Date(b.scheduledDateTime) : new Date(0));
    return dateB - dateA;
  });

  const recentWorkouts = sortedVisibleWorkouts.slice(0, 4);

  // Exclude the recentWorkouts from the archive
  const recentWorkoutIds = new Set(recentWorkouts.map(w => w._id));
  const archiveWorkouts = workouts.filter(w => !recentWorkoutIds.has(w._id));

  // Organize archiveWorkouts for the archive section
  const organizeArchiveWorkouts = () => {
    const organized = {};
    archiveWorkouts.forEach((workout) => {
      const workoutDate = workout.date ? new Date(workout.date) : (workout.scheduledDateTime ? new Date(workout.scheduledDateTime) : null);
      if (!workoutDate) return;
      const year = workoutDate.getFullYear();
      const month = workoutDate.toLocaleString("default", { month: "long" });

      if (!organized[year]) organized[year] = {};
      if (!organized[year][month]) organized[year][month] = [];
      organized[year][month].push(workout);
    });
    return organized;
  };

  const organizedArchiveWorkouts = organizeArchiveWorkouts();

  if (loading) return (
    <Container fluid style={{ backgroundColor: "var(--bg-light1)", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
      <Spinner animation="border" role="status" style={{ width: "3rem", height: "3rem", color: "var(--bg-black)" }}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p className="poppins-700 text-center mt-3" style={{ color: "var(--bg-black)" }}>Loading workouts...</p>
    </Container>
  );
  
  if (error) return (
    <Container fluid style={{ backgroundColor: "var(--bg-light1)", minHeight: "100vh" }}>
      <p className="poppins-700">Error: "Please try again or contact CrossFit XLR8.</p>
    </Container>
  );

  return (
    <Container fluid style={{ backgroundColor: "var(--bg-light1)" }}>
      {/* Current Month's Workouts Section */}
      <Row className="text-center py-4">
        <Col>
          <h2 className="poppins-900-main">Workout of the Day (WOD)</h2>
          <p>
            Stay motivated with our daily workouts tailored to challenge and inspire you.
          </p>
        </Col>
      </Row>
      <Row>
        {recentWorkouts.map((workout, index) => {
          // Use imageUrl from backend, only show if present
          const imageSrc = workout.imageUrl || null;
          const cleanedContent = workout.content.replace(/<img[^>]*>/g, "");

          return (
            <Col
              xs={12}
              className={`mb-4 ${index === recentWorkouts.length - 1 ? "" : "card-divider"}`}
              key={workout._id}
            >
              <Card className="d-flex align-items-center card-no-border card-mobile"
              style= {{ backgroundColor: "var(--bg-dark)" }}>
                {imageSrc && (
                  <div className="card-img-container">
                    <Card.Img
                      src={imageSrc}
                      alt={`${workout.title} workout`}
                      className="card-img-left"
                    />
                  </div>
                )}
                <Card.Body className="card-body-stacked">
                  <Card.Title className="poppins-900-sub">{workout.title}</Card.Title>
                  <Card.Text
                    className="poppins-700"
                    dangerouslySetInnerHTML={{ __html: cleanedContent }}
                  />
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      {/* Archive Section */}
      <Row className="text-center m-5">
        <Col>
          <h2 className="poppins-900-main">Archives</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Accordion className="mb-3">
            {Object.keys(organizedArchiveWorkouts)
              .sort((a, b) => b - a)
              .map((year) => (
                <Accordion.Item eventKey={year} key={year}>
                  <Accordion.Header className="poppins-900-sub">{year}</Accordion.Header>
                  <Accordion.Body>
                    {Object.keys(organizedArchiveWorkouts[year])
                      .sort((a, b) => new Date(`${b} 1, ${year}`) - new Date(`${a} 1, ${year}`))
                      .map((month) => (
                        <Accordion key={month}>
                          <Accordion.Item eventKey={`${year}-${month}`}>
                            <Accordion.Header className="poppins-900-sub">{month}</Accordion.Header>
                            <Accordion.Body>
                              {organizedArchiveWorkouts[year][month].map((workout, index) => {
                                const imageSrc = workout.imageUrl || null;
                                const cleanedContent = workout.content.replace(/<img[^>]*>/g, "");
                                return (
                                  <Col
                                    xs={12}
                                    className={`mb-4 ${
                                      index === organizedArchiveWorkouts[year][month].length - 1
                                        ? ""
                                        : "card-divider"
                                    }`}
                                    key={workout._id}
                                  >
                                    <Card className="d-flex flex-column align-items-center card-no-border card-archive">
                                      {imageSrc && (
                                        <div className="card-img-container">
                                          <Card.Img
                                            src={imageSrc}
                                            alt={`${workout.title} workout`}
                                            className="card-img-left"
                                          />
                                        </div>
                                      )}
                                      <Card.Body className="card-body-stacked">
                                        <Card.Title className="poppins-900-sub">
                                          {workout.title}
                                        </Card.Title>
                                        <Card.Text
                                          className="poppins-700"
                                          dangerouslySetInnerHTML={{ __html: cleanedContent }}
                                        />
                                      </Card.Body>
                                    </Card>
                                  </Col>
                                );
                              })}
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      ))}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default Wod;