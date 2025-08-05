import { Container, Row, Col, Accordion, Carousel, Card } from "react-bootstrap";
import Programs from "../Programs";
import OurGym from "../OurGym";

function AboutUs() {
  const coaches = [
    {
      name: "Molly Gillespie",
      img: "/media/coaches/molly1.jpg",
      bio: "Molly, aka Mo…..yep, she’s still happy to be here! Believing quality of living has a foundation of feeling good, she is here to help ensure independent longevity and yes that comes with Burpees, falling down and returning to your feet! Mo started CrossFit in 2007, got her CF Level 1 2008, started CF XLR8 Affiliate in 2009 and CF Kids in 2010. Molly is a full time Medical Dosimetrist in Radiation Oncology and has been for the past 34 years, along with other businesses. Husband Jason and their children Shelby and Mason make her happy life complete. Nothing feeds her drive more than being witness to individuals discovering just how strong they can be mentally and physically. CrossFit is her tool for self worth and life long lasting relationships!",
    },
    {
      name: "Jason Gillespie",
      img: "/media/coaches/jason2.jpg",
      bio: "Jason started crossfit in October 2009. Along the way he received a CrossFit Level 1 coaching certificate and a USA weightlifting certification. Definitely the community is his favorite part of those 15 years. Working out, coaching and hanging out with all the amazing like minded members has been the highlight of his time at XLR8. \"Don’t let the old man\" in is his motto.. \"Crossfit XLR8 has allowed me to keep that goal. I can’t imagine not having XLR8 in our lives. Let’s continue to grow and help others achieve those goals\".",
    },
    {
      name: "Brian Hagemann",
      img: "/media/coaches/brian1.jpg",
      bio: "Brian has been a CrossFit XLR8 member since 2009. With his current work schedule, he doesn’t get to work out or coach as much as he used to. But he gets in a workout and catches up with his CrossFit family as often as possible. You’ll usually find him at the noon class, choosing Option 1 every time! CrossFit has been the motivation to keep moving, so he can keep up with his 5 grand kids and enjoy an active life.",
    },
    {
      name: "Hailey Riedesel",
      img: "/media/coaches/hailey2.jpg",
      bio: "Hailey started CrossFit in 2014 and is happy to be back with her XLR8 Family. She received her CrossFit Level 1 and CrossFit Kids certifications in 2016 and recently completed her Masters in Kinesiology at TAMUCC. You can always find Hailey coaching multiple classes through out the week including our unloaded classes at 10am Tuesday and Thursdays.",
    },
    {
      name: "Dan Willot",
      img: "/media/coaches/dan1.jpg",
      bio: "Dan Willott dove into CrossFit at XLR8 in 2011, spurred on by his wife and fire station buddies. Throughout his career, CrossFit has kept him in peak shape and physically ready for the demands of firefighting. Shortly after, he earned his Olympic lifting coaching certification and loved coaching so much he went on to get his CrossFit level one certification. With sharp skills and infectious energy, he pushes athletes of all levels to crush their goals. In his free time, he’s part of a group that gives back to the community by forging knives with veterans and first responders.",
    },
    {
      name: "Matt Gully",
      img: "/media/coaches/matt1.jpg",
      bio: "Matt spent 24 years moving around the country flying helicopters for the US Coast Guard and began CrossFit in 2014 while living in Jacksonville, Florida. Originally from Texas he couldn’t wait to get back to his home state and moved to Portland in 2021, where he found our XLR8 family. Working out, starting back in High School and Collegiate sports, has always been an important part of his life. He has a daughter in High School and a son in Middle School who both enjoy sports and are starting on their fitness journey as well. He plans to retire from the military in 2024 and hopes to call this gym his home for many years to come. Coach Matt is excited to take the next step as a Coach and thankful for the opportunity to share his knowledge and experience!",
    },
    {
      name: "Justin Horton",
      img: "/media/coaches/justin2.jpg",
      bio: "Justin is a native Portlander and moved away for a bit after graduating college from TAMUCC. However, in 2015 while finishing up his doctoral work he took a pastoral position at First Baptist Church here in Portland and moved back in 2016 to raise his family here. Justin has always enjoyed an active lifestyle spending his free time surfing, kayaking, fishing and pretty much anything else that involves coastal outdoor living. While “training” for a long distance relay race (223 miles) in 2017, Justin found Crossfit XLR8 and was quickly captivated with this new “competitive style” community workout environment. The rest, so they say, is history. He completed his CF-L1 as the next step to continue to help support and grow the XLR8 community that has become an integral part of his life.",
    },
    {
      name: "Tracy Gonzalez",
      img: "/media/coaches/tracy2.jpg",
      bio: "Tracy joined CrossFit XLR8 in 2014 and immediately fell in love with both the sport and the community. She earned her CF-0L1 certification in July 2024 and is passionate about CrossFit for its motivation to stay active and build strength. The skills and principles learned in CrossFit have greatly benefited her daily life, especially as a mom of two girls. When she’s not at the gym, Tracy enjoys spending time with her family, being outdoors, running or rides on her  Peloton at home. She is excited to be on the other side of the experience now, helping others improve their technique and achieve their goals, just as the coaches at CrossFit XLR8 have done for her.",
    },
    {
      name: "Hunter Myrick",
      img: "/media/coaches/hunter1.jpg",
      bio: "Hunter began his CrossFit journey in 2019, working out at his company gym as a way to lose weight. In April of that year, he discovered CrossFit XLR8 and quickly fell in love with the atmosphere. Inspired by his own transformation, he decided to start coaching in 2020 and now finds immense joy in helping others improve themselves with each workout. When he’s not coaching, Hunter stays busy coaching his two sons in their various sports and enjoys putting his fitness to the test in a variety of events outside the gym.",
    },
    {
      name: "Amanda Rodriguez",
      img: "/media/coaches/amanda1.jpg",
      bio: "Amanda started CrossFit in 2014 and joined CrossFit XLR8 in 2016—pregnant with baby #2 (and later #3), determined not to let burpees slow her down too much. With the XLR8 coaches cheering her on to scale smart, listen to her body, and keep moving, she quickly realized this was more than a gym—it was family.These days, Amanda’s still showing up and still surprising herself. Her favorite movements are pull-ups and squat cleans. Running? Not so much. But every now and then, she shocks the coach by choosing it anyway then instantly regrets it mid workout. Her journey—competing, lifting while growing tiny humans, and proving that motherhood doesn’t mean slowing down—inspired her to become a coach. She received her CF-OL1 in June 2024. With her CF-OL1 and a whole lot of heart, Amanda wants to help others grow stronger, more confident, and supported—just like she was. If you see her coaching or mid-WOD, say hey! Just don’t invite her on a run unless snacks are promised.",
    },
    {
      name: "Matt Rodriguez",
      img: "/media/coaches/shorty2.jpg",
      bio: "Matt Rodriguez Matt began his CrossFit journey in 2014 and instantly fell in love with the energy and community that XLR8 has built. His favorite workout is Cindy — 20 minutes of 5 pull-ups, 10 push-ups, and 15 air squats — a true test of grit and consistency. Matt enjoys spending time with family and friends whenever he can, mainly outdoors. After suffering a ruptured Achilles while playing basketball, he experienced firsthand the support and encouragement of the XLR8 coaching team, who helped guide him back into CrossFit workouts at his own pace. Inspired by that journey, Matt decided to become a coach himself, earning his CF-OL1. He wants to help others grow stronger, move better, and feel more confident. If you see him around—coaching, sweating, or pretending to stretch—say hey! Just don’t invite him to play basketball."},
    {
      name: "Oscar Lara",
      img: "/media/coaches/oscar1.jpg",
      bio: "Oscar started CrossFit back in 2019 after watching Open Announcement 15.1 on YouTube (Froning vs Fraser). He joined XLR8 last August and immediately loved the atmosphere and the community. He recently obtained his CF-OL1 after wanting to get his L1 for 6 years and plans to help coach as many classes and people as possible. Fun fact he loves anything with rowing and pull ups but hates burpees and running. When he’s not at the gym he enjoys spending time with his wife, 2 boys and their corgi Rogue. If you see him at a class say hi and if you ever want a partner for a competition let him know!",
    },
    {
      name: "Lindsay Flach",
      img: "/media/coaches/lindsay2.jpg",
      bio: "Lindsay is a world-class athlete and experienced coach dedicated to helping others achieve their fitness and performance goals. A 3x Olympic Trials Qualifier and 9x Team USA Member, Lindsay brings over 12 years of coaching expertise in volleyball, track (sprints and multi-events), speed and agility training, and adult functional fitness. A Wisconsin native and 2018 University of South Alabama Hall of Fame Inductee, Lindsay was a dual-sport collegiate athlete and multi-sport high school standout. She has also been honored as Wisconsin Athlete of the Year and is a proud member of the National Society of Collegiate Scholars. Passionate about empowering others, she inspires athletes and adults to excel in both sports and everyday life.",
    },
    {
      name: "anibal Guerrero",
      img: "/media/coaches/anibal1.jpg",
      bio: "Aníbal started training CrossFit in 2018 in Venezuela and hasn’t stopped since. He loves the challenges and competition, he especially enjoys Olympic lifting — like the clean & jerk and snatch — and although gymnastics isn’t his strongest suit yet, he stays motivated practicing movements like handstand push-ups, wall walks, and muscle-ups. In 2021, he competed in Venezuela’s largest CrossFit competition— an experience that marked a turning point in his motivation as an athlete. He is a mechanical engineer with over 20 years of experience, Aníbal loves his work, but CrossFit is his space to disconnect from work stress — his “personal, selfish, and relaxing hour.” Passionate about sports since childhood, he played baseball throughout his youth and also enjoys soccer and basketball. Since June 2023, he has been part of the XLR8 community, where he immediately connected with the box’s energy and people. Always driven to help others, both in his engineering career and in every workout shared. In 2025, he earned his CF-OL1 certification, aiming to contribute as a coach by helping others move better, train with intention, and enjoy the process."
    },
    {
      name: "Morgan Fehr",
      img: "/media/coaches/morgan1.jpg",
      bio: "Morgan started CrossFit back in 2014, and as a former high school athlete, fell in love with the competitiveness and triumph of the sport. She has been coaching off and on since 2016, joined CrossFit xlr8 in 2023, and is now excited to have the opportunity to coach for our facility. Being a positive influence for her two boys is extremely important to her and she hopes to carry that on in the gym with our athletes, helping them achieve their fitness goals in a fun and positive way. Her and her husband are proud members of our CrossFit community and love the great environment it provides. Morgan has a passion for the barbell and is excited to share that with our gym.",
    }
  ];

  return (
    <Container fluid style={{ padding: 0, margin: 0 }}>
      {/* Our Gym Section */}
      <OurGym />

      {/* Programs Section */}
      <Programs />

      {/* Meet the Coaches Section */}
      <Row style={{ backgroundColor: "var(--bg-light1)" }}>
        <Col>
          <h2 className="text-center my-5 poppins-900-main"  style= {{color: "var(--bg-black)"}}>Meet the Coaches</h2>
          <div className="carousel-outer-wrap mb-5">
            <Carousel
              interval={null}
              controls={true}
              indicators={false}
              fade
              style={{
                maxWidth: 600,
                width: "100%",
                margin: "0 auto",
                display: "block",
                overflow: "visible",
              }}
            >
              {coaches.map((coach, idx) => (
                <Carousel.Item key={idx}>
                  <Card
                    className="mx-auto coach-card-uniform"
                    style={{
                      height: "600px",
                      minHeight: "400px",
                      maxHeight: "400px",
                      display: "flex",
                      backgroundColor: "var(--bg-light2)",
                    }}
                  >
                    <Row className="g-0 align-items-stretch h-100 flex-column flex-md-row"  style= {{color: "var(--bg-black)"}}>
                      <Col xs={12} md={6} className="d-flex h-100">
                        <Card.Img
                          src={coach.img}
                          alt={coach.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            flex: 1,
                          }}
                          className="h-100 w-100"
                        />
                      </Col>
                      <Col xs={12} md={6} className="d-flex h-100">
                        <Card.Body
                          className="d-flex flex-column justify-content-center"
                          style={{
                            overflow: "auto",
                            maxHeight: "350px",
                            minHeight: "350px",
                            height: "350px",
                          }}
                        >
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
      <Row style={{ backgroundColor: "var(--bg-light2)" }}>
        <Col>
          <h2 className="text-center mt-5 poppins-900-main"  style= {{color: "var(--bg-black)"}}>FAQs</h2>
          <Accordion className="mb-3">
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
