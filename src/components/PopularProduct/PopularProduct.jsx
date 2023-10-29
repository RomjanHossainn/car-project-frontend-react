import axios from "axios";
import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
const PopularProduct = () => {

    const [products,setProducts] = useState(null)

    useEffect(() => {
        axios.get("popularproducts.json")
        .then(result => setProducts(result.data))
    },[])

   
    return (
      <div className="py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5 ">
          {products?.map((product, index) => (
            <SingleProduct key={index} product={product}></SingleProduct>
          ))}
        </div>
        <div className="flex justify-center ">
          <button className="border w-max border-orange-700 px-4 py-2 rounded-md font-semibold text-[#FF3811]">
            More Product
          </button>
        </div>
      </div>
    );
};

export default PopularProduct;