import { Link, useLoaderData, useParams } from "react-router-dom";
import technology from "../../assets/technology .jpg";
import "./Details.css";
const Details = () => {
  const products = useLoaderData();
  const { id } = useParams();
  const product = products?.find((product) => product._id === id);

  const { image, name, brand_name, description, price, type } = product;
  console.log(id, product);
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
      <div className="w-11/12 mx-auto my-5 md:my-10 md:flex justify-between gap-5 items-center ">
        <div className="md:w-[50%]">
          <img src={image} alt="" className="rounded-xl h-[300px] md:h-[400px]" />
        </div>
        <div className="md:w-[50%] pt-5 md:pt-0 text-center md:text-left">
          <h1 className="text-xl md:text-3xl uppercase">{name}</h1>
          <h1 className="text-lg md:text-xl py-2">{description}</h1>
          <h1 className="text-lg md:text-xl">Producte Name {brand_name}</h1>
          <h1 className="text-lg md:text-xl py-1">Producte Price : ${price}</h1>
          <h1 className="text-lg md:text-xl">Producte Type {type}</h1>
          <div className="mt-4 md:w-5/12">
            <Link to = '/'>
              <button className="btn">
                <span>Go To Home</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
