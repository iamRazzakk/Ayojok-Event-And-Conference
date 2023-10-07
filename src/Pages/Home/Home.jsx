import Events from "../Event/Events";
import MyCarousel from "./Carusel/Carusel";
import OurServices from "./OurServices/OurServices";
import Partners from "./Partners/Partners";
import Speaker from "./Speaker/Speaker";

const Home = () => {
    return (
        <div>
            <MyCarousel></MyCarousel>
            <OurServices></OurServices>
            <div className="mt-32">
                <Events></Events>
            </div>
            <div className="mt-32 mb-32">
                <Speaker></Speaker>
            </div>
            <Partners></Partners>

        </div>

    );
};

export default Home;