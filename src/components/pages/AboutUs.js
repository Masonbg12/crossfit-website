import { Container, Row, Col, Accordion } from "react-bootstrap";
import Programs from "../Programs";

function AboutUs() {
  return (
    <Container style={{ padding: "2rem 0" }}>
      {/* Our Story Section */}
      <Row className="mb-5" style={{backgroundColor: "#f8f9fa" }}>
        <Col>
          <h2 className="text-center">Our Gym</h2>
          <p className="text-center">
            Located on Hwy 35 in the “gateway” of Portland and Gregory, we have a 13,000 square foot facility and a 400 meter track to run! Our facility offers men and women’s showers, full kitchen, apparel shop. In our main gym area we are all equipped for the CrossFit WODs and another designated area equipped with a squat cage, jerk boxes, 5-atlas balls, and tumbling gymnastic mats. We have a dedicated Cardio Kickboxing room with additional men and women’s restrooms in close vicinity. We also have a new yoga room with the perfect vibe. We have 5 large rollup doors that lead to a 100’ covered porch with turf for outside activities. We have an asphalt track, rope climbing station with 6- 25′ ropes, as well as a children’s playground and basketball hoop. The facility also includes a camera system to check form and yes, integrity, and finally, surround sound Peavey sound system with mixer and microphones.
          </p>
        </Col>
      </Row>

      {/* Programs Section */}
      <Programs />

      {/* Meet the Coaches Section */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center">Meet the Coaches</h2>
          <Row>
            <Col xs={12} md={4} className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Coach 1"
                className="rounded-circle mb-3"
              />
              <h5>Coach John</h5>
              <p>Expert in strength training and mobility.</p>
            </Col>
            <Col xs={12} md={4} className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Coach 2"
                className="rounded-circle mb-3"
              />
              <h5>Coach Sarah</h5>
              <p>Specialist in endurance and CrossFit basics.</p>
            </Col>
            <Col xs={12} md={4} className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Coach 3"
                className="rounded-circle mb-3"
              />
              <h5>Coach Mike</h5>
              <p>Focused on high-intensity interval training.</p>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* FAQ Section */}
      <Row>
        <Col>
          <h2 className="text-center">FAQs</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What are some of the exercises/movements we do?</Accordion.Header>
              <Accordion.Body>
                CrossFit teaches 9 Foundational Movements. The mastery of these 9 movements correlate directly to the efficiency of the exercises performed during your workouts and transfer to the development of other skills you see often in WODs. They are:
                <ul>
                  <li>Air Squat</li>
                  <li>Front Squat</li>
                  <li>Overhead Squat</li>
                  <li>Shoulder Press</li>
                  <li>Push Press</li>
                  <li>Push Jerk</li>
                  <li>Deadlift</li>
                  <li>Sumo Deadlift High Pull</li>
                  <li>Medicine Ball Clean</li>
                </ul>
                Other movements/exercises include:
                <ul>
                  <li>Pull Ups</li>
                  <li>Push Ups</li>
                  <li>Sit Ups</li>
                  <li>Jump Rope</li>
                  <li>Box Jumps</li>
                  <li>Running/Sprinting</li>
                  <li>Rowing</li>
                  <li>Dumbbell Work</li>
                  <li>Kettlebell Swings</li>
                  <li>Wall Balls</li>
                  <li>Static Holds</li>
                  <li>And various others</li>
                </ul>
                While this list may seem foreign or intimidating, please note that every one of them is modifiable and scalable to meet your skill level and needs.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Do you recommend training daily?</Accordion.Header>
              <Accordion.Body>
                No. Maximum benefits are derived from intensity and recovery. We offer a complete health and fitness program, and so we recommend that you take time to recover so that you perform your best at every session. This will prevent injury and backsliding from overtraining. You’ll be surprised to learn that the volume of training doesn’t reflect your fitness or progression. Talk to one of our coaches to choose the schedule that meets your specific goals--especially if you’re using CrossFit as your conditioning program for a specific sport.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Should I warm up and stretch before class?</Accordion.Header>
              <Accordion.Body>
                Please come to CrossFit XLR8 at the scheduled time for your class, and we will warm up together!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Do I have to be in shape to take CrossFit classes?</Accordion.Header>
              <Accordion.Body>
                No. Really. There is a common misconception that CrossFit is for elite athletes. The truth is that it is for everyone. Sure, we say that we are “forging elite fitness” and we are. This means that you start the journey where you are today. And, if you stay on our path it’s likely that you will get in to the best physical, emotional and mental shape of your life. Our community is comprised of competitive athletes, former athletes, working professionals, stay-at-home parents, people that had never stepped foot into a gym and people with physical ailments. Our program is the most efficient, most effective regimen for everyone. Allow us to get you into the best shape of your life.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Do I need prior experience to take classes?</Accordion.Header>
              <Accordion.Body>
                No. The beauty of CrossFit is that all exercises are based on movements that you already do--like squatting, pushing and pulling. Exercises are scaled to inspire the beginner and challenge the most elite athlete.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>What should I expect at my first CrossFit workout?</Accordion.Header>
              <Accordion.Body>
                Your first workout at CrossFit XLR8 will be a fun and efficient experience. Each class starts with a dynamic warm-up, then it’s skill training, instruction and movement standards for the WOD (workout of the day). When your coach says “3-2-1 Go!” the challenge begins and our community of athletes push themselves and encourage others to achieve elite fitness. Athletes that have completed “On-Ramp” with us or at another CrossFit Box may join scheduled WODs. For your first class, please arrive a few minutes early to meet our members, coaches and get to know our box.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>When is CrossFit Kids?</Accordion.Header>
              <Accordion.Body>
                Please contact us for CrossFit Kids schedules.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
