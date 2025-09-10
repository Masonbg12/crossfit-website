import { Row, Col, Carousel } from "react-bootstrap";

const gymImages = [
  {
    src: "/media/building-pics/gym-good-front.webp",
    alt: "Front view of our gym",
  },
  {
    src: "/media/building-pics/established-wall.webp",
    alt: "Established wall view of our gym",
  },
  {
    src: "/media/building-pics/main-floor.webp",
    alt: "Main floor view of our gym",
  },
  {
    src: "/media/building-pics/gym-main.webp",
    alt: "Main area view of our gym",
  },
  {
    src: "/media/building-pics/backyard.webp",
    alt: "Backyard view of our gym",
  },
  {
    src: "/media/building-pics/office.webp",
    alt: "Office view of our gym",
  },
  {
    src: "/media/building-pics/gym-kitchen.webp",
    alt: "Kitchen room view of our gym",
  },
  {
    src: "/media/building-pics/gym-massage.webp",
    alt: "Massage room view of our gym",
  },
  {
    src: "/media/building-pics/gym-kids.webp",
    alt: "Kids area view of our gym",
  },
  {
    src: "/media/building-pics/gym-back.webp",
    alt: "Back view of our gym",
  },
  {
    src: "/media/building-pics/gym-studio.webp",
    alt: "Studio view of our gym",
  },
  {
    src: "/media/building-pics/second-floor.webp",
    alt: "Second floor view of our gym",
  },
  {
    src: "/media/building-pics/skis.webp",
    alt: "Ski area view of our gym",
  },
  {
    src: "/media/gallery/side-sign.webp",
    alt: "side building sign"
  },
  {
    src: "/media/gallery/running-wave.webp",
    alt: "workout action photo"
  },
  {
    src: "/media/gallery/group-outside.webp",
    alt: "group photo"
  },
  {
    src: "/media/gallery/parents-partner.webp",
    alt: "workout action photo"
  }
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