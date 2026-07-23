import Banner from "./Banner";
import Corevalues from "./Corevalues";
import Interbuyer from "./Interbuyer";
import Mission from "./Mission";
import ProSer from "./ProSer";
import Vision from "./Vision";


const Home = () => {
    return (
        <div className=" py-0">
           <Banner/>
           <Vision/>
           <Mission/>
           <Corevalues/>
           <ProSer/>
           <Interbuyer/>
        </div>
    );
};

export default Home;