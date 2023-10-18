import AwesomeFeatures from "../../companent/AwesomeFeatures/AwesomeFeatures";
import Banner from "../../companent/Header/Banner/Banner";
import Brands from "../Brands/Brands";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Brands/>
            <AwesomeFeatures/>
        </div>
    );
};

export default Home;