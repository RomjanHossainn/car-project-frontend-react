import { useEffect } from "react";
import { useState } from "react";
import SingleService from "./SingleService";

const Service = () => {

  
    const [services,setServices] = useState([])
    useEffect(() => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    

    return (
      <div>
        <div className="text-center space-y-3">
          <h1 className="text-lg text-orange-700 font-bold">Service</h1>
          <h3 className="text-4xl">Our Service Area</h3>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which don not look even slightly
            believable.{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
            {
                services?.map(service => <SingleService
                key={service._id} service = {service}></SingleService>)
            }
        </div>






        
        <div className="text-center">
            <button className="border px-3 py-2 rounded-md border-orange-700 text-lg">More Services</button>
        </div>
      </div>
    );
};

export default Service;