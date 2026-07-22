import mision from '../imgas/misson.jpg';

const Mission = () => {
    return (
       <div className="flex justify-center">
         <img
           src={mision}
           alt="mision"
           className="w-[95%] h-auto"
         />
       </div>
    );
};

export default Mission;