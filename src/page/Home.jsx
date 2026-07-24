import Fabric from "./allpage/Fabric";

import Banner from "./Banner";
import Corevalues from "./Corevalues";
import Interbuyer from "./Interbuyer";
import LocalBuyers from "./LocalBuyers";
import Mission from "./Mission";
import ProSer from "./ProSer";
import Vision from "./Vision";


const Home = () => {
    return (
        <div className=" py-0">
           <Banner/>
            <Mission/>
           <Vision/>
          
           <Corevalues/>
           <ProSer/>
           <Interbuyer/>
           <LocalBuyers/>
           <Fabric/>
          
        </div>
    );
};

export default Home;