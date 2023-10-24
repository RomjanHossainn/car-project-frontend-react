import aboutImg from '../../assets/images/about_us/parts.jpg'
import aboutBig from '../../assets/images/about_us/person.jpg'
const About = () => {
    return (
      <div>
        <div className=" py-8 min-h-screen">
          <div className="hero-content space-y-8 md:space-y-0 flex-col lg:flex-row gap-20">
            <div className="w-full lg:w-1/2 relative">
              <img src={aboutBig} className="rounded-lg w-full shadow-2xl sm:min-h-[400px]" />
              <img
                src={aboutImg}
                alt=""
                className=" w-full max-w-[250px] border-8 border-white right-[80px] md:right-[300px]  absolute -bottom-12 lg:-right-12 rounded-lg "
              />
            </div>
            <div className="lg:w-1/2 ">
              <div className="">
                <h3 className="text-2xl text-[#FF3811] font-bold mb-3">
                  About Us
                </h3>
                <h1 className="text-5xl font-bold">
                  We are qualified <br /> & of experience <br /> in this field
                </h1>
                <p className="py-6">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which donnott
                  look even slightly believable.
                </p>
                <p className="mb-6">
                  the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don not look even
                  slightly believable.{" "}
                </p>
                <button className=" bg-[#FF3811] px-6 py-3 rounded-lg text-white">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;