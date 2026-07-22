import Banner from "./Banner";
import Corevalues from "./Corevalues";
import Mission from "./Mission";
import ProSer from "./ProSer";
import Vision from "./Vision";


const Home = () => {
    return (
        <div className=" py-4">
           <Banner/>
           <Vision/>
           <Mission/>
           <Corevalues/>
           <ProSer/>
        </div>
    );
};

export default Home;