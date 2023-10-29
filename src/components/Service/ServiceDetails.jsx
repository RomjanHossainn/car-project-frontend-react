import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const ServiceDetails = () => {

    const {id} = useParams()

    const [serviceData,setServiceData] = useState(null)
    
    useEffect(() => {
        axios.get(`http://localhost:5000/services/${id}`)
        .then((response) => {
            setServiceData(response.data)
        })
        .catch((erorr) => {
            console.log(erorr)
        })
    },[id])

    

    if(!serviceData){
        return (
          <span className=" loading loading-lg text-2xl loading-spinner absolute left-1/2 top-1/2 text-gray-800"></span>
        );
    }

    console.log(serviceData)

    const  {img,title,price,_id} = serviceData || {}


    return (
        <div>
            <img src={img} alt="" />
            <p>{title}</p>
            <p>Price : {price}</p>
            <Link to={`/checkout/${_id}`}>
            <button className="btn btn-secondary mt-5">CheckOut</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;