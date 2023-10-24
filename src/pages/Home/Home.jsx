
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Navigation from "../../components/Navigation/Navigation";
import Service from "../../components/Service/Service";

const Home = () => {
    
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <About></About>
            <Service></Service>
        </div>
    );
};

export default Home;