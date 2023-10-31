import { useContext } from "react";
import { Authcontext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const CheckoutPrivet = ({children}) => {
    const {users,loading} = useContext(Authcontext)
    const location = useLocation();
    console.log(location)
    if(loading){
        return <span>LOADING</span>
    }

    if(users){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>

};

export default CheckoutPrivet;