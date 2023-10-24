
const CaroselIcon = ({slide,slide2}) => {
 
    return (
      <div className="absolute flex justify-between  gap-5 transform -translate-y-1/2  right-5 bottom-0">
        <a
          href={`#slide${slide}`}
          className=" h-14 w-14 text-2xl flex rounded-full text-white justify-center items-center bg-[#FFFFFF33]"
        >
          ❮
        </a>
        <a
          href={`#slide${slide2}`}
          className="h-14 w-14 text-2xl flex justify-center items-center bg-[#FF3811] text-white rounded-full"
        >
          ❯
        </a>
      </div>
    );
};

export default CaroselIcon;