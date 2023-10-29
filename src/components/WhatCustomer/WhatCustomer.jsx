import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import man1 from "../../assets/images/team/man1.png";
import man2 from "../../assets/images/team/man2.png";

const WhatCustomer = () => {
     const responsive = {
       desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 3,
         slidesToSlide: 3, // optional, default to 1.
       },
       tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 2,
         slidesToSlide: 2, // optional, default to 1.
       },
       mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 1,
         slidesToSlide: 1, // optional, default to 1.
       },
     };
    return (
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        rewindWithAnimation={true}
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        //   deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          <div className="flex items-center gap-3">
            <img src={man1} alt="" />
            <div>
              <h3>Awlad Hossain</h3>
              <p>Businessman</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
            >
              <path
                d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z"
                fill="#FF3811"
                fill-opacity="0.2"
              />
              <path
                d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z"
                fill="#FF3811"
                fill-opacity="0.2"
              />
            </svg>
          </div>
          <p className="mt-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which donot look even slightly
            believable.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <img src={man2} alt="" />
            <div>
              <h3>Awlad Hossain</h3>
              <p>Businessman</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
            >
              <path
                d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z"
                fill="#FF3811"
                fill-opacity="0.2"
              />
              <path
                d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z"
                fill="#FF3811"
                fill-opacity="0.2"
              />
            </svg>
          </div>
          <p className="mt-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which donot look even slightly
            believable.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <img src={man2} alt="" />
            <div>
              <h3>Awlad Hossain</h3>
              <p>Businessman</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
            >
              <path
                d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z"
                fill="#FF3811"
                fill-opacity="0.2"
              />
              <path
                d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z"
                fill="#FF3811"
                fill-opacity="0.2"
              />
            </svg>
          </div>
          <p className="mt-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which donot look even slightly
            believable.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <img src={man2} alt="" />
            <div>
              <h3>Awlad Hossain</h3>
              <p>Businessman</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
            >
              <path
                d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z"
                fill="#FF3811"
                fill-opacity="0.2"
              />
              <path
                d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z"
                fill="#FF3811"
                fill-opacity="0.2"
              />
            </svg>
          </div>
          <p className="mt-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which donot look even slightly
            believable.
          </p>
        </div>

      </Carousel>
    );
};

export default WhatCustomer;
