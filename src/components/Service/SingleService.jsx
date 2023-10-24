import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const SingleService = ({ service }) => {
  const { price, title, img, _id } = service || {};
  return (
    <div className="card border">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="flex items-end justify-between px-10 py-5">
        <div className=" space-y-2">
          <h2 className="card-title">{title}</h2>
          <p className="text-lg text-red-600 font-bold">Price : {price}$</p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/details/${_id}`} >
            <AiOutlineArrowRight className="text-2xl text-orange-700 cursor-pointer"></AiOutlineArrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
