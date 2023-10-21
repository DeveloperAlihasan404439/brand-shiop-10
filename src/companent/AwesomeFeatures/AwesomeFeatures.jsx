import Marquee from "react-fast-marquee";
import T1 from "../../assets/vector.svg";
import T2 from "../../assets/vector2.svg";
import T3 from "../../assets/vector3.svg";
import T4 from "../../assets/vector4.svg";
const AwesomeFeatures = () => {
  return (
    <div className=" py-5">
      <div className=" w-11/12 mx-auto">
        <div className="md:mt-10">
          <div className="md:w-9/12 mx-auto pb-10 border-4 border-[#034192]  border-b-0 rounded-bl-[100%] rounded-br-[100%] rounded-tl-[100%] rounded-tr-[100%]">
            <div className="flex gap-5 items-center justify-center pt-10 ">
              <div className="bg-orange-600 p-2 w-[10px] h-[10px] rounded-[50%]"></div>
              <h1 className="text-lg md:text-2xl">OUR FEATURES</h1>
              <div className="bg-orange-600 p-2 w-[10px] h-[10px] rounded-[50%]"></div>
            </div>
            <h1 className="text-center text-2xl md:text-4xl my-4">
              Awesome Features
            </h1>
            <div className="w-8/12 mx-auto">
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
          </div>
          <div className="w-11/12 mt-5 md:mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="card  shadow-xl ">
              <div className="m-5 p-5 w-[100px] flex justify-center rounded-lg">
                <img src={T1} alt="Shoes" className="rounded-t-xl w-[50px] " />
              </div>
              <div className="card-body ">
                <h2 className="card-title  ">Technology Solution</h2>
                <p className="">
                  Comprehensive services offering innovative tech solutions to
                  streamline processes, improve efficiency
                </p>
              </div>
            </div>
            <div className="card  shadow-xl ">
              <div className="m-5 p-5 w-[100px] flex justify-center rounded-lg">
                <img src={T2} alt="Shoes" className="rounded-t-xl w-[50px] " />
              </div>
              <div className="card-body">
                <h2 className="card-title ">E-commerce Technical Service</h2>
                <p>
                  Dedicated support for resolving online shopping tech issues,
                  ensuring smooth transactions
                </p>
              </div>
            </div>
            <div className="card  shadow-xl ">
              <div className="m-5 p-5 w-[100px] flex justify-center rounded-lg">
                <img src={T3} alt="Shoes" className="rounded-t-xl w-[50px] " />
              </div>
              <div className="card-body">
                <h2 className="card-title ">E-commerce Tech Aid</h2>
                <p>
                  If you have any specific questions or need further information
                  about E-commerce Tech Aid, please feel free to ask.
                </p>
              </div>
            </div>
            <div className="card  shadow-xl ">
              <div className="m-5 p-5 w-[100px] flex justify-center rounded-lg">
                <img src={T4} alt="Shoes" className="rounded-t-xl w-[50px] " />
              </div>
              <div className="card-body">
                <h2 className="card-title ">E-commerce Tech Aid</h2>
                <p>
                  We troubleshoot issues, ensuring your e-commerce experience is
                  seamless and stress-free
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwesomeFeatures;
