import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from '../imgas/jacket1.jpg'
import bannerImg2 from '../imgas/messkapor.jpg'
import bannerImg3 from '../imgas/ladiesbag.jpg'
import bannerImg4 from '../imgas/ladiasjama.jpg'
// import bannerImg2 from '../../public/imgas/lether1.jpg'
// import bannerImg3 from '../../public/imgas/lether3.jpg'
// import bannerImg4 from '../../public/imgas/manufaq.jpg'

const Banner = () => {
    return (
           <Carousel
            autoPlay={true}
            infiniteLoop={true}
            className=''
        
        >
            {/* <div >
                <img  src={bannerImg2} />
            </div> */}
            <div>
                <img src={bannerImg1} />
            </div>
            <div>
                <img src={bannerImg2} />
            </div>
            <div>
                <img src={bannerImg3} />
            </div>
            <div>
                <img src={bannerImg4} />
            </div>
        </Carousel>
    );
};

export default Banner;