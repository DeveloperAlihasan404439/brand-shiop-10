import AwesomeFeatures from "../../companent/AwesomeFeatures/AwesomeFeatures";
import Contact from "../../companent/Contact/Contact";
import Customers from "../../companent/Customers/Customers";
import Banner from "../../companent/Header/Banner/Banner";
import Brands from "../Brands/Brands";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Brands/>
            <Customers/>
            <AwesomeFeatures/>
            <Contact/>
        </div>
    );
};

export default Home;