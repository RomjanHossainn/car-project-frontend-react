
const SingleProduct = ({product}) => {
    const {img,title,price,rating} = product || {}
    return (
      <div className="text-center border rounded-md">
        <div className="md:h-[350px] p-5">
          <img
            src={img}
            className="mx-auto h-full w-full rounded-md bg-[#F3F3F3]"
            alt=""
          />
        </div>
        <div className="space-y-2 py-5">
          <h5 className="font-semibold">{rating}</h5>
          <h3 className="text-2xl text-gray-700">{title}</h3>
          <p className="text-[#FF3811] font-bold">${price}</p>
        </div>
      </div>
    );
};

export default SingleProduct;