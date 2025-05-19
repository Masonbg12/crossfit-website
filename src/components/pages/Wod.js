import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";

function Wod() {
  // State variables
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const mongoURL = "http://localhost:5000/data";

  // Fetch WODs from the backend
  useEffect(() => {
    const fetchWODs = async () => {
      try {
        const response = await fetch(mongoURL);
        if (!response.ok) {
          throw new Error("Failed to fetch WODs");
        }
        const data = await response.json();
        setWorkouts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWODs();
  }, []);

  // Organize workouts by year and month
  const organizeWorkouts = () => {
    const organized = {};
    workouts.forEach((workout) => {
      const date = new Date(workout.date);
      const year = date.getFullYear();
      const month = date.toLocaleString("default", { month: "long" });

      if (!organized[year]) organized[year] = {};
      if (!organized[year][month]) organized[year][month] = [];
      organized[year][month].push(workout);
    });
    return organized;
  };

  const organizedWorkouts = organizeWorkouts();

  // Filter visible workouts
  const now = new Date();
  const visibleWorkouts = workouts.filter(workout => {
    if (!workout.scheduledDateTime) return true;
    return new Date(workout.scheduledDateTime) <= now;
  });

  // Render loading or error states
  if (loading) {
    return <p className="poppins-700 text-center">Loading...</p>;
  }

  if (error) {
    return <p className="poppins-700">Error: {error}</p>;
  }

  return (
    <Container style={{ padding: "2rem 0" }}>
      {/* Current Month's Workouts Section */}
      <Row className="text-center mb-4">
        <Col>
          <h2 className="poppins-900-main">Workout of the Day (WOD)</h2>
          <p className="poppins-700">
            Stay motivated with our daily workouts tailored to challenge and inspire you.
          </p>
        </Col>
      </Row>
      <Row>
        {visibleWorkouts.slice(-4).map((workout, index) => {
          const imageSrc =
            (Array.isArray(workout.images) && workout.images[0]) ||
            (() => {
              const imgMatch = workout.content.match(/<img[^>]+src="([^">]+)"/);
              return imgMatch ? imgMatch[1] : "placeholder.jpg";
            })();

          // Remove all <img> tags from the content
          const cleanedContent = workout.content.replace(/<img[^>]*>/g, "");

          return (
            <Col
              xs={12}
              className={`mb-4 ${index === visibleWorkouts.slice(-4).length - 1 ? "" : "card-divider"}`}
              key={workout._id}
            >
              <Card className="d-flex align-items-center card-no-border card-mobile">
                <div className="card-img-container">
                  <Card.Img
                    src={imageSrc}
                    alt={`${workout.title} workout`}
                    className="card-img-left"
                  />
                </div>
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
          <Accordion>
            {Object.keys(organizedWorkouts)
              .sort((a, b) => b - a)
              .map((year) => (
                <Accordion.Item eventKey={year} key={year}>
                  <Accordion.Header className="poppins-900-sub">{year}</Accordion.Header>
                  <Accordion.Body>
                    {Object.keys(organizedWorkouts[year])
                      .sort((a, b) => new Date(`${b} 1, ${year}`) - new Date(`${a} 1, ${year}`))
                      .map((month) => (
                        <Accordion key={month}>
                          <Accordion.Item eventKey={`${year}-${month}`}>
                            <Accordion.Header className="poppins-900-sub">{month}</Accordion.Header>
                            <Accordion.Body>
                              {organizedWorkouts[year][month].map((workout, index) => {
                                {/* THERE NEEDS TO BE A DECISION MADE ABOUT ARCHIVED PHOTOS*/}
                                const imageSrc =
                                  (Array.isArray(workout.images) && workout.images[0]) ||
                                  (() => {
                                    const imgMatch = workout.content.match(/<img[^>]+src="([^">]+)"/);
                                    return imgMatch ? imgMatch[1] : null;
                                  })();

                                // Remove all <img> tags from the content
                                const cleanedContent = workout.content.replace(/<img[^>]*>/g, "");

                                return (
                                  <Col
                                    xs={12}
                                    className={`mb-4 ${
                                      index === organizedWorkouts[year][month].length - 1
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