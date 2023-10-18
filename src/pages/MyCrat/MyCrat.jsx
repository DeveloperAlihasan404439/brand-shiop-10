import { useLoaderData } from "react-router-dom";
import technology from "../../assets/technology .jpg";
import AddCrat from "../../companent/AddCrat/AddCrat";
import { useState } from "react";
const MyCrat = () => {
  const myCratData = useLoaderData();
  const [cratData, setCratData] = useState(myCratData)
  const hendelDelete = () =>{
    console.log('id');
  }
  return (
    <div>
      <div className="h-[70vh] relative">
        <img src={technology} alt="" className="h-full w-full" />
        <div className="md:w-6/12 absolute top-0 right-0 flex justify-center md:justify-end px-5 md:px-0 pt-5 md:pt-0 items-center h-[100%]">
          <div className="md:pr-10 text-white">
            <h1 className="text-center text-xl md:text-3xl font-rancho pb-5">
              Tech Revolution: Explore Cutting-Edge Gadgets. Stay Connected and
              Entertained with Our Latest Innovations.
            </h1>
            <p className="text-center ">
              Discover our latest technology products designed to enhance your
              daily life. From smart home devices to high-performance gadgets,
              our innovations keep you connected, entertained, and efficient in
              today is digital world. Upgrade your lifestyle with our tech
              solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 md:py-10">
        {
        cratData?.map(myCrat => <AddCrat key={myCrat._id} myCrat = {myCrat} hendelDelete={hendelDelete}/>)
        }
    </div>
    </div>
  );
};

export default MyCrat;
