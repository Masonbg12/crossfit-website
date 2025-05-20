import { Container, Row, Col, Accordion, Carousel, Card } from "react-bootstrap";
import Programs from "../Programs";

function AboutUs() {
  const coaches = [
    {
      name: "Molly Gillespie",
      img: "https://via.placeholder.com/300x300",
      bio: "Coach Molly, aka Mo…..yep, she’s still happy to be here! Believing quality of living has a foundation of feeling good, she is here to help ensure independent longevity and yes that comes with Burpees, falling down and returning to your feet! Mo started CrossFit in 2007, got her CF Level 1 2008, started CF XLR8 Affiliate in 2009 and CF Kids in 2010. Molly is a full time Medical Dosimetrist in Radiation Oncology and has been for the past 32 years, along with other businesses. She has been married for 32 years, and has two “kids” ages 29 & 23. Nothing feeds her drive more than being witness to individuals discovering just how strong they can be mentally and physically. CrossFit is her tool for self worth and life long lasting relationships!",
    },
    {
      name: "Jason Gillespie",
      img: "https://via.placeholder.com/300x300",
      bio: "Specialist in endurance and CrossFit basics.",
    },
    {
      name: "Paige Smith",
      img: "https://via.placeholder.com/300x300",
      bio: "Focused on high-intensity interval training.",
    },
    {
      name: "Brian Hagemann",
      img: "https://via.placeholder.com/300x300",
      bio: "Focused on high-intensity interval training.",
    },
    {
      name: "Hailey Riedesel",
      img: "https://via.placeholder.com/300x300",
      bio: "Coach Hailey started CrossFit in 2014 and is happy to be back with her XLR8 Family. She received her CrossFit Level 1 and CrossFit Kids certifications in 2016 and recently completed her Masters in Kinesiology at TAMUCC. You can always find Hailey coaching multiple classes through out the week including our unloaded classes at 10am Tuesday and Thursdays.",
    },
    {
      name: "Dan Willot",
      img: "https://via.placeholder.com/300x300",
      bio: "Focused on high-intensity interval training.",
    },
    {
      name: "Matt Gully",
      img: "https://via.placeholder.com/300x300",
      bio: "Coach Matt spent 24 years moving around the country flying helicopters for the US Coast Guard and began CrossFit in 2014 while living in Jacksonville, Florida. Originally from Texas he couldn’t wait to get back to his home state and moved to Portland in 2021, where he found our XLR8 family. Working out, starting back in High School and Collegiate sports, has always been an important part of his life. He has a daughter in High School and a son in Middle School who both enjoy sports and are starting on their fitness journey as well. He plans to retire from the military in 2024 and hopes to call this gym his home for many years to come. Coach Matt is excited to take the next step as a Coach and thankful for the opportunity to share his knowledge and experience!",
    },
    {
      name: "Tristian Garcia",
      img: "https://via.placeholder.com/300x300",
      bio: "Tristian has been doing Crossfit since about 2013. He actually started at this exact gym. He says he is always down to do burpees so feel free to join me! Tristian loves all types of fitness, and loves trying new forms as well. Olympic lifts has to be one of his favorites in CrossFit, nothing better than that catch of the barbell. He has been coaching for about 5 years. He moved just over the bridge and got his CrossFit Level 1 Certification and started coaching at another box close to home at the time. That same gym is where he definitely grew to be the coach he is today, as well as gaining his CrossFit Level 2 Certification. Now he’s moved back to Portland with his amazing family of 2 beautiful daughters and his amazing woman! Thus leading me right back to where he started his Crossfit journey! He is excited to coach each and every one of yall! As well as give you  every opportunity you want and need to grow in crossfit with all of its benefits!",
    },
    {
      name: "Heather Boone",
      img: "https://via.placeholder.com/300x300",
      bio: "Coach Heather Started Crossfit back in 2013 and immediately found a love for the sport. She has coached at Crossfit gyms before, but became official and got her L1 in 2021. She is a teacher and coach for the Gregory-Portland Wildcats and is mommy to two wild cubs of her own. Coach Heather has an extensive fitness background and knowledge she can’t wait to share with everyone and is so happy to be part of the staff at XLR8!",
    },
    {
      name: "Justin Horton",
      img: "https://via.placeholder.com/300x300",
      bio: "Coach Justin is a native Portlander and moved away for a bit after graduating college from TAMUCC. However, in 2015 while finishing up his doctoral work he took a pastoral position at First Baptist Church here in Portland and moved back in 2016 to raise his family here. Justin has always enjoyed an active lifestyle spending his free time surfing, kayaking, fishing and pretty much anything else that involves coastal outdoor living. While “training” for a long distance relay race (223 miles) in 2017, Justin found Crossfit XLR8 and was quickly captivated with this new “competitive style” community workout environment. The rest, so they say, is history. He completed his CF-L1 as the next step to continue to help support and grow the XLR8 community that has become an integral part of his life.",
    },
    {
      name: "Tracy Gonzalez",
      img: "https://via.placeholder.com/300x300",
      bio: "Coach Tracy joined CrossFit XLR8 in 2014 and immediately fell in love with both the sport and the community. She earned her CF-OL1 certification in July 2024 and is passionate about CrossFit for its motivation to stay active and build strength. The skills and principles learned in CrossFit have greatly benefited her daily life, especially as a mom of two girls. When she’s not at the gym, Tracy enjoys spending time with her family, being outdoors, running or rides on her  Peloton at home. She is excited to be on the other side of the experience now, helping others improve their technique and achieve their goals, just as the coaches at CrossFit XLR8 have done for her.",
    },
    {
      name: "Amanda Rodriguez",
      img: "https://via.placeholder.com/300x300",
      bio: "Coach Amanda grew up in Ingleside and started CrossFit in 2014. She been at CrossFit XLR8 since 2016 and just received her CF-OL1 June 2024. She loves CrossFit because the community, variety, and the motivation to compete. She says CrossFit has allowed her  to push herself to the point where it hurts and say “why do I keep coming back” but the results are worth it! Her least favorite thing is running but has pushed herself this year to choose running over rowing/skiing. She’s excited to be on the other side helping others improve their technique and reach goals like the coaches at Crossfit Xlr8 have done for her. When you see Amanda around be sure to say hi and welcome her to our team!",
    },
    {
      name: "Lindsay Flach",
      img: "https://via.placeholder.com/300x300",
      bio: "Coach Lindsay Flach is a world-class athlete and experienced coach dedicated to helping others achieve their fitness and performance goals. A 3x Olympic Trials Qualifier and 9x Team USA Member, Lindsay brings over 12 years of coaching expertise in volleyball, track (sprints and multi-events), speed and agility training, and adult functional fitness. A Wisconsin native and 2018 University of South Alabama Hall of Fame Inductee, Lindsay was a dual-sport collegiate athlete and multi-sport high school standout. She has also been honored as Wisconsin Athlete of the Year and is a proud member of the National Society of Collegiate Scholars. Passionate about empowering others, she inspires athletes and adults to excel in both sports and everyday life.",
    },
  ];

  return (
    <Container style={{ padding: "2rem 0" }}>
      {/* Our Story Section */}
      <Row className="mb-5" style={{ backgroundColor: "#f8f9fa" }}>
        <Col>
          <h2 className="text-center poppins-900-main">Our Gym</h2>
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
          <h2 className="text-center mb-4 poppins-900-main">Meet the Coaches</h2>
          <div className="carousel-outer-wrap">
            <Carousel
              interval={null}
              indicators={coaches.length > 1}
              controls={true}
              className="custom-carousel-controls"
              style={{ maxWidth: 600, width: "100%", margin: "0 auto" }}
            >
              {coaches.map((coach, idx) => (
                <Carousel.Item key={idx}>
                  <Card className="mx-auto coach-card-uniform">
                    <Row className="g-0 align-items-center" style={{ height: "100%" }}>
                      <Col xs={12} md={6} style={{ height: "100%" }}>
                        <Card.Img
                          src={coach.img}
                          alt={coach.name}
                          className="h-100"
                        />
                      </Col>
                      <Col xs={12} md={6} style={{ height: "100%" }}>
                        <Card.Body className="d-flex flex-column justify-content-center h-100" style={{ overflow: "hidden"}}>
                          <Card.Title className="poppins-900-sub text-center">{coach.name}</Card.Title>
                          <Card.Text>{coach.bio}</Card.Text>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </Col>
      </Row>

      {/* FAQ Section */}
      <Row>
        <Col>
          <h2 className="text-center poppins-900-main">FAQs</h2>
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
