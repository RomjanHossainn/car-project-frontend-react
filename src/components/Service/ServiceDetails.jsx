import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const [service,setService] = useState({})
    const {id} = useParams();
    const loadedServices = useLoaderData();

    useEffect(() => {
        const findService = loadedServices.find(
          (service) => service._id === id
        );
        setService(findService);

    },[id,loadedServices]);


    return (
        <div>
            <img src={service.img} alt="" />
        </div>
    );
};

export default ServiceDetails;