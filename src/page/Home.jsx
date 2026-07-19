import Banner from "./Banner";
import Corevalues from "./Corevalues";
import Vision from "./Vision";


const Home = () => {
    return (
        <div className=" py-4">
           <Banner/>
           <Vision/>
           <Corevalues/>
        </div>
    );
};

export default Home;