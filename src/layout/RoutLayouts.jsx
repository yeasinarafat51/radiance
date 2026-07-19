
import { Outlet } from "react-router-dom";
import Navbar from '../navbar/Navbar';
import Footer from "../shared/Footer";

const RoutLayouts = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>

           
            
        </div>
    );
};

export default RoutLayouts;