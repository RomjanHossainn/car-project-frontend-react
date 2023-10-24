

const BannerText = () => {
    return (
      <div className="absolute rounded-s-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-full ps-8 flex items-center h-full text-white">
        <div className=" space-y-2 md:space-y-8">
          <h1 className=" text-3xl md:text-7xl font-bold max-w-lg">
            Affordable Price For Car Servicing
          </h1>
          <p className="max-w-md">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex space-y-4 md:space-y-0 md:gap-5 flex-col md:flex-row">
            <button className="bg-[#FF3811] text-sm lg:text-base px-2 py-2 md:px-4 w-max md:py-3 rounded-md">
              Discover More
            </button>
            <button className="border w-max text-sm md:text-base px-2 py-2 md:px-4 md:py-3 rounded-md ">
              Latest Project
            </button>
          </div>
        </div>
      </div>
    );
};

export default BannerText;