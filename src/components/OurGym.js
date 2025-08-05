import { Row, Col, Carousel } from "react-bootstrap";

const gymImages = [
  {
    src: "/media/building-pics/gym-good-front.jpg",
    alt: "Front view of our gym",
  },
  {
    src: "/media/building-pics/established-wall.jpg",
    alt: "Established wall view of our gym",
  },
  {
    src: "/media/building-pics/main-floor.jpg",
    alt: "Front view of our gym",
  },
  {
    src: "/media/building-pics/gym-main.jpg",
    alt: "Main area view of our gym",
  },
  {
    src: "/media/building-pics/backyard.jpg",
    alt: "Backyard view of our gym",
  },
  {
    src: "/media/building-pics/office.jpg",
    alt: "Office view of our gym",
  },
  {
    src: "/media/building-pics/gym-kitchen.jpg",
    alt: "Kitchen room view of our gym",
  },
  {
    src: "/media/building-pics/gym-massage.jpg",
    alt: "Massage room view of our gym",
  },
  {
    src: "/media/building-pics/gym-kids.jpg",
    alt: "Kids area view of our gym",
  },
  {
    src: "/media/building-pics/gym-back.jpg",
    alt: "Back view of our gym",
  },
  {
    src: "/media/building-pics/gym-studio.jpg",
    alt: "Studio view of our gym",
  },
  {
    src: "/media/building-pics/second-floor.jpg",
    alt: "Second floor view of our gym",
  },
  {
    src: "/media/building-pics/skis.jpg",
    alt: "Ski area view of our gym",
  },
];

function OurGym() {
  return (
    <Row style={{ backgroundColor: "var(--bg-light1", padding: "1rem" }}>
      <Col>
        <h2 className="text-center my-4 poppins-900-main"  style= {{color: "var(--bg-black)"}}>Our Gym</h2>
        <div className="carousel-outer-wrap">
          <Carousel
            interval={null}
            indicators={gymImages.length > 1}
            controls={true}
            fade
            style={{ margin: "0 auto" }}
          >
            {gymImages.map((img, idx) => (
              <Carousel.Item key={idx}>
                <div className="d-flex justify-content-center">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="d-block our-gym-image"
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <p className="text-center p-3"  style= {{color: "var(--bg-black)"}}>
          Located on Hwy 35 in the “gateway” of Portland and Gregory, we have a
          13,000 square foot facility and a 400 meter track to run! Our facility
          offers men and women’s showers, full kitchen, apparel shop. In our main
          gym area we are all equipped for the CrossFit WODs and another
          designated area equipped with a squat cage, jerk boxes, 5-atlas balls,
          and tumbling gymnastic mats. We have a dedicated Cardio Kickboxing room
          with additional men and women’s restrooms in close vicinity. We also
          have a new yoga room with the perfect vibe. We have 5 large rollup
          doors that lead to a 100’ covered porch with turf for outside
          activities. We have an asphalt track, rope climbing station with 6-25′
          ropes, as well as a children’s playground and basketball hoop. The
          facility also includes a camera system to check form and yes, integrity,
          and finally, surround sound Peavey sound system with mixer and
          microphones.
        </p>
      </Col>
    </Row>
  );
}

export default OurGym;