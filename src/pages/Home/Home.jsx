
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Navigation from "../../components/Navigation/Navigation";
import Number from "../../components/Number/Number";
import PopularProduct from "../../components/PopularProduct/PopularProduct";
import Service from "../../components/Service/Service";
import Tems from "../../components/Tems/Tems";
import WhatCustomer from "../../components/WhatCustomer/WhatCustomer";

const Home = () => {
    
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Number></Number>
            <PopularProduct></PopularProduct>
            <Tems></Tems>
            <WhatCustomer></WhatCustomer>
        </div>
    );
};

export default Home;