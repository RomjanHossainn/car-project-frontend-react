import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import SingleOrder from "./SingleOrder";
const YourOrders = () => {

    
    const [userOrders,setUserOrders] = useState(null)
    
    const { users, loading } = useContext(Authcontext);
    
    useEffect(() => {
        fetch(`http://localhost:5000/getorders?email=${users?.email}`)
        .then(res => res.json())
        .then(result => setUserOrders(result))
    },[users?.email])
    

    


    const handleDelete = (id) => {
      const check = confirm("Are you sure");
      if (check) {
        axios
          .delete(`http://localhost:5000/deleteorders/${id}`)
          .then(() => {
            const filterDelete = userOrders.filter((order) => order?._id !== id);
            setUserOrders(filterDelete);
          });
      }
    };

    if (loading) {
      return "loading";
    }

    if(!userOrders){
        return (
          <span className=" loading loading-lg text-2xl loading-spinner absolute  left-1/2 top-1/2 text-gray-800"></span>
        );
    }

   
    const handleUpdate = (id) => {
        const sure = confirm('are you sure');
        if(sure){
            axios.put(`http://localhost:5000/updateorders/${id}`,{status : 'approved'})
            .then(result => {
                
                if(result.data.modifiedCount > 0){
                    const updateFilter = userOrders.filter(order => order._id !== id)
                    
                    const findUpdate = userOrders.find(
                      (order) => order._id === id
                    );
                    findUpdate.status = "approved";
                    setUserOrders([findUpdate,...updateFilter])
                    
                }
            })
        }
        
    }
    

    return (
      <div>
        <h1 className="text-center text-3xl py-12">
          {userOrders.length > 0 ? "Your Order Avalable" : "No Orders avalable"}
        </h1>
        <div>
          {/* {
            <SingleOrder
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
              userOrders={userOrders}
            ></SingleOrder>
          } */}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th></th>
                  <th scope="col" className="px-6 py-3">
                    firstName
                  </th>
                  <th scope="col" className="px-6 py-3">
                    phone
                  </th>
                  <th scope="col" className="px-6 py-3">
                    email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    address
                  </th>
                </tr>
              </thead>
              <tbody>
                {userOrders?.map((order) => (
                  <SingleOrder
                    key={order._id}
                    order={order}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                  ></SingleOrder>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default YourOrders;