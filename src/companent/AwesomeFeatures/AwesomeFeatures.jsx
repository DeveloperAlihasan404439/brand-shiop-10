import Marquee from "react-fast-marquee";
const AwesomeFeatures = () => {
  return (
    <div className=" bg-base-200 py-5">
      <div className=" bg-base-200 w-11/12 mx-auto">
        <div className="md:w-8/12 mx-auto">
          <Marquee className="flex gap-3">
            <div className="p-5 ">
              <img
                src="https://i.ibb.co/87JQHwG/google.jpg"
                alt=""
                className="w-[150px] rounded-2xl h-[100px]"
              />
            </div>
            <div className="p-5">
              <img
                src="https://i.ibb.co/RSJ8nWS/svmsung.jpg"
                alt=""
                className="w-[150px] rounded-2xl h-[100px]"
              />
            </div>
            <div className="p-5">
              <img
                src="https://i.ibb.co/gDp2sx4/nokia.webp"
                alt=""
                className="w-[150px] rounded-2xl h-[100px]"
              />
            </div>
            <div className="p-5">
              <img
                src="https://i.ibb.co/FXqbzdS/intel.jpg"
                alt=""
                className="w-[150px] rounded-2xl h-[100px]"
              />
            </div>
            <div className="p-5">
              <img
                src="https://i.ibb.co/BsrLPvD/apply.png"
                alt=""
                className="w-[150px] rounded-2xl h-[100px]"
              />
            </div>
          </Marquee>
        </div>
        <div className="md:mt-10">
          <div className="w-8/12 mx-auto pb-10 border-4 border-l-[#034192] border-t-[#052750c0] border-r-[#06758F] border-b-0 rounded-bl-[100%] rounded-br-[100%] rounded-tl-[100%] rounded-tr-[100%]">
            <div className="flex gap-5 items-center justify-center pt-10 ">
              <div className="bg-orange-600 p-2 w-[10px] h-[10px] rounded-[50%]"></div>
              <h1 className="text-lg md:text-2xl">OUR FEATURES</h1>
              <div className="bg-orange-600 p-2 w-[10px] h-[10px] rounded-[50%]"></div>
            </div>
            <h1 className="text-center text-2xl md:text-4xl my-4">
              Awesome Features
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwesomeFeatures;
