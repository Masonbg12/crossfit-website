import { Row, Col, Carousel } from "react-bootstrap";

const gymImages = [
  {
    src: "/media/building-pics/building-front.jpg",
    alt: "Front View of Our Gym",
  },
  {
    src: "/media/building-pics/established-wall.jpg",
    alt: "Established Wall View of Our Gym",
  },
  {
    src: "/media/building-pics/main-floor.jpg",
    alt: "Front View of Our Gym",
  },
  {
    src: "/media/building-pics/backyard.jpg",
    alt: "Backyard View of Our Gym",
  },
  {
    src: "/media/building-pics/office.jpg",
    alt: "Office View of Our Gym",
  },
  {
    src: "/media/building-pics/second-floor.jpg",
    alt: "Second Floor View of Our Gym",
  },
  {
    src: "/media/building-pics/skis.jpg",
    alt: "Ski Area View of Our Gym",
  },
];

function OurGym() {
  return (
    <Row style={{ backgroundColor: "#f8f9fa", padding: "1rem" }}>
      <Col>
        <h2 className="text-center mb-4 poppins-900-main">Our Gym</h2>
        <div className="carousel-outer-wrap">
          <Carousel
            interval={null}
            indicators={gymImages.length > 1}
            controls={true}
            fade
            style={{ maxWidth: "75vw", width: "100%", margin: "0 auto" }}
          >
            {gymImages.map((img, idx) => (
              <Carousel.Item key={idx}>
                <div className="d-flex justify-content-center">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="d-block w-75 img-fluid"
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <p className="text-center p-3">
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